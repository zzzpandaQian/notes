(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{374:function(t,s,a){"use strict";a.r(s);var n=a(41),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"项目搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目搭建"}},[t._v("#")]),t._v(" 项目搭建")]),t._v(" "),a("h2",{attrs:{id:"一、django构建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、django构建项目"}},[t._v("#")]),t._v(" 一、Django构建项目")]),t._v(" "),a("h4",{attrs:{id:"_1、cmd命令行构建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、cmd命令行构建项目"}},[t._v("#")]),t._v(" 1、cmd命令行构建项目")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("cmd窗口中，切换到指定的项目文件夹，执行：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("django-admin startproject mysite\n")])])]),a("p",[t._v("其中 mysite 是你的项目名称")]),t._v(" "),a("p",[t._v("这时会在指定的项目文件夹中，生成一个 mysite 文件夹，目录结构如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mysite/\n    manage.py\n    mysite/\n        __init__.py\n        settings.py\n        urls.py\n        wsgi.py\n")])])]),a("p",[t._v("这些目录和文件的说明如下：")]),t._v(" "),a("ul",[a("li",[t._v("最外层的mysite/ 根目录是项目的名称")]),t._v(" "),a("li",[t._v("manage.py 是管理 Django 项目的命令行工具")]),t._v(" "),a("li",[t._v("里面一层的 mysite/ 目录包含你的项目主应用，它是一个 Python 包")]),t._v(" "),a("li",[t._v("mysite/_"),a("em",[t._v("init")]),t._v("_.py：一个空文件，告诉 Python 这个目录是一个 Python 包")]),t._v(" "),a("li",[t._v("mysite/settings.py：项目的配置文件")]),t._v(" "),a("li",[t._v("mysite/urls.py：项目的 url路由配置")]),t._v(" "),a("li",[t._v("mysite/wsgi.py：用于你的项目的与WSGI兼容的Web服务器入口，用于项目部署")])])]),t._v(" "),a("li",[a("p",[t._v("cmd窗口中，进入最外层的mysite")])]),t._v(" "),a("li",[a("p",[t._v("在这个目录下，我们可以输入如下命令，创建一个新的子应用：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("django-admin startapp first_app\n")])])])]),t._v(" "),a("li",[a("p",[t._v("在该cmd目录下执行如下命令，可以启动项目：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("python manage.py runserver\n")])])]),a("p",[t._v("该命令后续可以增加参数，如：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("python manage.py runserver 8081\npython manage.py runserver 127.0.0.1:8082\n")])])]),a("p",[t._v("cmd窗口中会出现如下信息：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('F:\\django_study\\first_pro>python manage.py runserver\nWatching for file changes with StatReloader\nPerforming system checks...\n\nSystem check identified no issues (0 silenced).\n\nYou have 17 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.\nRun \'python manage.py migrate\' to apply them.\nJuly 03, 2019 - 16:11:57\nDjango version 2.2.1, using settings \'first_pro.settings\'\nStarting development server at http://127.0.0.1:8000/\nQuit the server with CTRL-BREAK.\n[03/Jul/2019 16:13:06] "GET / HTTP/1.1" 200 16348\n[03/Jul/2019 16:13:06] "GET /static/admin/css/fonts.css HTTP/1.1" 200 423\n[03/Jul/2019 16:13:06] "GET /static/admin/fonts/Roboto-Regular-webfont.woff HTTP/1.1" 200 85876\n[03/Jul/2019 16:13:06] "GET /static/admin/fonts/Roboto-Light-webfont.woff HTTP/1.1" 200 85692\n[03/Jul/2019 16:13:06] "GET /static/admin/fonts/Roboto-Bold-webfont.woff HTTP/1.1" 200 86184\nNot Found: /favicon.ico\n[03/Jul/2019 16:13:06] "GET /favicon.ico HTTP/1.1" 404 1975\n')])])])]),t._v(" "),a("li",[a("p",[t._v("在浏览器中访问第4步提示的服务器网址：Starting development server at http://127.0.0.1:8000/ 中的")]),t._v(" "),a("p",[t._v("http://127.0.0.1:8000/ ，会出现如下欢迎页面：")])]),t._v(" "),a("li",[a("p",[t._v("第5步能够打开一个 django 的欢迎页面，是因为第 4 步 中的命令，启动了django自带的一个简易web服务器，它是一个用纯 Python 写的轻量级的 Web 服务器。仅仅用于开发环境，不要在生产环境使用。")]),t._v(" "),a("p",[t._v("在这个服务器中，在需要的情况下会对每一次的访问请求重新载入一遍 Python 代码。所以你不需要为了让修改的代码生效而频繁的重新启动服务器。然而，一些动作，比如添加新文件，将不会触发自动重新加载，这时你得自己手动重启服务器。")])])]),t._v(" "),a("h4",{attrs:{id:"_2、pycharm构建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、pycharm构建项目"}},[t._v("#")]),t._v(" 2、pycharm构建项目")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("pycharm 中 file >> new project >> django")]),t._v(" "),a("p",[t._v("PS：只有 pycharm professional版本才可以直接创建django项目")])]),t._v(" "),a("li",[a("p",[t._v("location 中，前面路径，选择你自己的项目路径， untitled 项目名改为 firstdjangopycharm 变成如下：")])])]),t._v(" "),a("p",[t._v("F:\\py_study\\firstdjangopycharm")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[t._v("project interpreter 点击 左边的 三角形 ，选择一个合适的 解释器")])]),t._v(" "),a("li",[a("p",[t._v("more settings， 点击 左边的 三角形，设置 applications name，点击 create")])]),t._v(" "),a("li",[a("p",[t._v("查看目录结构如下：")]),t._v(" "),a("p",[t._v("其中polls子应用下各文件的说明如下：")]),t._v(" "),a("ul",[a("li",[t._v("migrations ： 执行数据库的迁移操作，就是把 models 中的 model 映射到数据库")]),t._v(" "),a("li",[t._v("admin ：admin管理界面文件")]),t._v(" "),a("li",[t._v("apps：  本应用的相关配置文件")]),t._v(" "),a("li",[t._v("models：数据库的model文件")]),t._v(" "),a("li",[t._v("tests：测试函数文件")]),t._v(" "),a("li",[t._v("views：视图文件")])])]),t._v(" "),a("li",[a("p",[t._v("启动项目")]),t._v(" "),a("ol",[a("li",[t._v("运行根目录下的manage.py， 第一次会运行失败，因为没有添加参数")]),t._v(" "),a("li",[t._v("在pycharm的右上角")])]),t._v(" "),a("p",[t._v("选择 edit configurations")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[t._v("在 parameters 中写入  runserver 0.0.0.0:8000")])]),t._v(" "),a("li",[a("p",[t._v("再次运行 manage.py，控制台显示信息如下：")])]),t._v(" "),a("li",[a("p",[t._v("在浏览器中访问： http://127.0.0.1:8000 , 可以看到django的欢迎页面")])])])]),t._v(" "),a("li",[a("p",[t._v("添加第一个页面")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("修改polls/views.py，增加如下代码：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("http "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" HttpResponse\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" HttpResponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"欢迎学习Django!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("这是 Django 中最简单的视图。")]),t._v(" "),a("p",[t._v("定义了一个index()函数，第一个参数必须是 request，与网页发来的请求有关，request 变量里面包含get或post的内容，用户浏览器，系统等信息在里面（后面会详细讲，先了解一下就可以）。")])]),t._v(" "),a("li",[a("p",[t._v("在polls目录下新建 urls.py")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urls "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" path\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" views\n\nurlpatterns "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" views"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])])]),t._v(" "),a("li",[a("p",[t._v("修改 主应用下的urls.py（firstdjangopycharm/urls.py）")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contrib "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" admin\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urls "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" include\n\nurlpatterns "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'polls/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" include"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'polls.urls'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'admin/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" admin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("site"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])])]),t._v(" "),a("li",[a("p",[t._v("重新启动manage.py")])]),t._v(" "),a("li",[a("p",[t._v("浏览器中访问：http://127.0.0.1:8000/polls/，浏览器会显示我们在 views 中返回的内容：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("欢迎学习Django!\n")])])])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);