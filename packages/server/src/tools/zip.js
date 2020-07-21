import { translateShowDataFromStore, getDomain } from '.';

/**
 * Created by lz on 2018/11/21.
 */
import path from 'path';
import fs from 'fs';
import archiver from 'archiver';

function zip(input, outputName) {
  return new Promise((resolve, reject) => {
    // create a file to stream archive data to.
    var output = fs.createWriteStream(outputName);
    var archive = archiver('zip', {
      zlib: { level: 9 } // Sets the compression level.
    });

    // listen for all archive data to be written
    // 'close' event is fired only when a file descriptor is involved
    output.on('close', function() {
      think.logger.info(archive.pointer() + ' total bytes');
      think.logger.info('archiver has been finalized and the output file descriptor has closed.');
      resolve();
    });

    // This event is fired when the data source is drained no matter what was the data source.
    // It is not part of this library but rather from the NodeJS Stream API.
    // @see: https://nodejs.org/api/stream.html#stream_event_end
    output.on('end', function() {
      think.logger.info('Data has been drained');
      resolve();
    });

    // good practice to catch warnings (ie stat failures and other non-blocking errors)
    archive.on('warning', function(err) {
      if (err.code === 'ENOENT') {
        // log warning
      } else {
        // throw error
        throw err;
      }
    });

    // good practice to catch this error explicitly
    archive.on('error', function(err) {
      reject(err);
    });

    // pipe archive data to the file
    archive.pipe(output);

    // append files from a glob pattern
    archive.directory(input, false);

    // finalize the archive (ie we are done appending files but streams have to finish yet)
    // 'close', 'end' or 'finish' may be fired right after calling this method so register to them beforehand
    archive.finalize();
  });
};

const viewPath = path.join(think.ROOT_PATH, 'view/');
const publicPath = path.join(think.ROOT_PATH, 'public', 'wap');
const zipPath = path.join(think.ROOT_PATH, 'www', 'static', 'zip');

export function createZip(str, id) {
  const obj = JSON.parse(str);
  const dataObj = translateShowDataFromStore(obj);
  const html = fs.readFileSync(path.join(viewPath, 'wap.html'), { encoding: 'utf-8' });
  const htmlStr = html.replace('$opusData', JSON.stringify(dataObj));
  fs.writeFileSync(path.join(publicPath, 'index.html'), htmlStr);
  const retUrl = `http://${getDomain()}/static/zip/${id}.zip`;
  return new Promise((resolve, reject) => {
    const filePath = `${zipPath}/${id}.zip`;
    const exist = fs.existsSync(filePath);
    if (exist) {
      resolve(filePath);
      return;
    }
    zip(`${publicPath}/`, filePath).then(() => {
      resolve(filePath);
    }).catch(reject);
  });
}
