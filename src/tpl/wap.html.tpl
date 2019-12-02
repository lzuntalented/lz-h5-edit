<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" id="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <link rel="stylesheet" href="<%= jsPath %>.css">
    <link href="https://cdn.bootcss.com/animate.css/3.7.0/animate.min.css" rel="stylesheet">
    <link href="https://cdn.bootcss.com/antd/3.23.6/antd.min.css" rel="stylesheet">
    <script type="text/javascript" src="http://api.map.baidu.com/api?v=3.0&ak=LN8Gj58iEjiSnUDVSrCwikCF6x41Q41i"></script>
	<script src="https://cdn.bootcss.com/react/16.8.6/umd/react.production.min.js"></script>
    <script src="https://cdn.bootcss.com/react-dom/16.8.6/umd/react-dom.production.min.js"></script>
    <script src="https://cdn.bootcss.com/react-router/3.2.1/ReactRouter.min.js"></script>
    <script src="https://cdn.bootcss.com/moment.js/2.24.0/moment.min.js"></script>
    <script src="https://cdn.bootcss.com/antd/3.23.6/antd.min.js"></script>
    <title>随心秀</title>
    <style>
        .boot{
            margin-top: 10px;
            border-top: 1px solid #cacaca;
            padding: 20px;
        }
    </style>
</head>
<body>
<div id="root"></div>
<script src="<%= jsPath %>.js" type="text/javascript" ></script>
<script>
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?1a099d1ba2515146d6227ffe71ffe995";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
</script>
</body>
</html>
