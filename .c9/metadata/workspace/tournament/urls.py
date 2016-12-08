{"filter":false,"title":"urls.py","tooltip":"/tournament/urls.py","ace":{"folds":[],"scrolltop":171.79154205322266,"scrollleft":0,"selection":{"start":{"row":22,"column":36},"end":{"row":22,"column":36},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":118,"mode":"ace/mode/python"}},"hash":"9555b85ab50a2cbe34f21e82bfd9b47538fc29f4","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":26,"column":55},"end":{"row":26,"column":56},"action":"insert","lines":["e"],"id":129}],[{"start":{"row":26,"column":56},"end":{"row":26,"column":57},"action":"insert","lines":["x"],"id":130}],[{"start":{"row":26,"column":52},"end":{"row":26,"column":57},"action":"remove","lines":["index"],"id":131},{"start":{"row":26,"column":52},"end":{"row":26,"column":53},"action":"insert","lines":["l"]}],[{"start":{"row":26,"column":53},"end":{"row":26,"column":54},"action":"insert","lines":["o"],"id":132}],[{"start":{"row":26,"column":54},"end":{"row":26,"column":55},"action":"insert","lines":["g"],"id":133}],[{"start":{"row":26,"column":55},"end":{"row":26,"column":56},"action":"insert","lines":["i"],"id":134}],[{"start":{"row":26,"column":56},"end":{"row":26,"column":57},"action":"insert","lines":["n"],"id":135}],[{"start":{"row":25,"column":4},"end":{"row":25,"column":6},"action":"insert","lines":["# "],"id":161},{"start":{"row":26,"column":4},"end":{"row":26,"column":6},"action":"insert","lines":["# "]}],[{"start":{"row":20,"column":32},"end":{"row":21,"column":0},"action":"insert","lines":["",""],"id":162}],[{"start":{"row":21,"column":0},"end":{"row":22,"column":0},"action":"insert","lines":["",""],"id":163}],[{"start":{"row":22,"column":0},"end":{"row":22,"column":51},"action":"insert","lines":["from django.contrib.auth import views as auth_views"],"id":164}],[{"start":{"row":19,"column":0},"end":{"row":19,"column":2},"action":"insert","lines":["# "],"id":165},{"start":{"row":20,"column":0},"end":{"row":20,"column":2},"action":"insert","lines":["# "]}],[{"start":{"row":26,"column":36},"end":{"row":27,"column":0},"action":"insert","lines":["",""],"id":166},{"start":{"row":27,"column":0},"end":{"row":27,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":27,"column":4},"end":{"row":28,"column":0},"action":"insert","lines":["",""],"id":167},{"start":{"row":28,"column":0},"end":{"row":28,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":28,"column":4},"end":{"row":29,"column":56},"action":"insert","lines":["url(r'^login/$', auth_views.login, name='login'),","    url(r'^logout/$', auth_views.logout, name='logout'),"],"id":168}],[{"start":{"row":29,"column":56},"end":{"row":30,"column":0},"action":"insert","lines":["",""],"id":169},{"start":{"row":30,"column":0},"end":{"row":30,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":28,"column":4},"end":{"row":28,"column":6},"action":"insert","lines":["# "],"id":170}],[{"start":{"row":28,"column":55},"end":{"row":29,"column":0},"action":"insert","lines":["",""],"id":171},{"start":{"row":29,"column":0},"end":{"row":29,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":29,"column":4},"end":{"row":29,"column":101},"action":"insert","lines":["url(r'^login/$', views.login, {'template_name': 'login.html', 'authentication_form': LoginForm}),"],"id":172}],[{"start":{"row":29,"column":4},"end":{"row":29,"column":101},"action":"remove","lines":["url(r'^login/$', views.login, {'template_name': 'login.html', 'authentication_form': LoginForm}),"],"id":173},{"start":{"row":29,"column":4},"end":{"row":29,"column":91},"action":"insert","lines":["url(r'^login/$', auth_views.login, {'template_name': 'core/login.html'}, name='login'),"]}],[{"start":{"row":29,"column":58},"end":{"row":29,"column":62},"action":"remove","lines":["core"],"id":174}],[{"start":{"row":29,"column":58},"end":{"row":29,"column":59},"action":"remove","lines":["/"],"id":175}],[{"start":{"row":29,"column":58},"end":{"row":29,"column":59},"action":"insert","lines":["c"],"id":176}],[{"start":{"row":29,"column":59},"end":{"row":29,"column":60},"action":"insert","lines":["o"],"id":177}],[{"start":{"row":29,"column":60},"end":{"row":29,"column":61},"action":"insert","lines":["r"],"id":178}],[{"start":{"row":29,"column":61},"end":{"row":29,"column":62},"action":"insert","lines":["e"],"id":179}],[{"start":{"row":29,"column":62},"end":{"row":29,"column":63},"action":"insert","lines":["/"],"id":180}],[{"start":{"row":29,"column":4},"end":{"row":29,"column":6},"action":"insert","lines":["# "],"id":181},{"start":{"row":30,"column":4},"end":{"row":30,"column":6},"action":"insert","lines":["# "]}],[{"start":{"row":29,"column":4},"end":{"row":29,"column":6},"action":"remove","lines":["# "],"id":182},{"start":{"row":30,"column":4},"end":{"row":30,"column":6},"action":"remove","lines":["# "]}],[{"start":{"row":22,"column":51},"end":{"row":23,"column":0},"action":"insert","lines":["",""],"id":183}],[{"start":{"row":23,"column":0},"end":{"row":23,"column":50},"action":"insert","lines":["from django.views.generic.base import TemplateView"],"id":184}],[{"start":{"row":29,"column":55},"end":{"row":30,"column":0},"action":"insert","lines":["",""],"id":185},{"start":{"row":30,"column":0},"end":{"row":30,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":30,"column":4},"end":{"row":30,"column":77},"action":"insert","lines":["url(r'^$', TemplateView.as_view(template_name='home.html'), name='home'),"],"id":186}],[{"start":{"row":30,"column":51},"end":{"row":30,"column":55},"action":"remove","lines":["home"],"id":187},{"start":{"row":30,"column":51},"end":{"row":30,"column":52},"action":"insert","lines":["i"]}],[{"start":{"row":30,"column":52},"end":{"row":30,"column":53},"action":"insert","lines":["n"],"id":188}],[{"start":{"row":30,"column":53},"end":{"row":30,"column":54},"action":"insert","lines":["d"],"id":189}],[{"start":{"row":30,"column":54},"end":{"row":30,"column":55},"action":"insert","lines":["e"],"id":190}],[{"start":{"row":30,"column":55},"end":{"row":30,"column":56},"action":"insert","lines":["x"],"id":191}],[{"start":{"row":30,"column":55},"end":{"row":30,"column":56},"action":"remove","lines":["x"],"id":192},{"start":{"row":30,"column":54},"end":{"row":30,"column":55},"action":"remove","lines":["e"]}],[{"start":{"row":30,"column":53},"end":{"row":30,"column":54},"action":"remove","lines":["d"],"id":193}],[{"start":{"row":30,"column":52},"end":{"row":30,"column":53},"action":"remove","lines":["n"],"id":194}],[{"start":{"row":30,"column":51},"end":{"row":30,"column":52},"action":"remove","lines":["i"],"id":195}],[{"start":{"row":30,"column":51},"end":{"row":30,"column":52},"action":"insert","lines":["h"],"id":196}],[{"start":{"row":30,"column":52},"end":{"row":30,"column":53},"action":"insert","lines":["o"],"id":197}],[{"start":{"row":30,"column":53},"end":{"row":30,"column":54},"action":"insert","lines":["m"],"id":198}],[{"start":{"row":30,"column":54},"end":{"row":30,"column":55},"action":"insert","lines":["e"],"id":199}],[{"start":{"row":30,"column":51},"end":{"row":30,"column":55},"action":"remove","lines":["home"],"id":200},{"start":{"row":30,"column":51},"end":{"row":30,"column":52},"action":"insert","lines":["i"]},{"start":{"row":30,"column":52},"end":{"row":30,"column":53},"action":"insert","lines":["n"]}],[{"start":{"row":30,"column":53},"end":{"row":30,"column":54},"action":"insert","lines":["d"],"id":201}],[{"start":{"row":30,"column":54},"end":{"row":30,"column":55},"action":"insert","lines":["x"],"id":202}],[{"start":{"row":30,"column":54},"end":{"row":30,"column":55},"action":"remove","lines":["x"],"id":203},{"start":{"row":30,"column":54},"end":{"row":30,"column":55},"action":"insert","lines":["e"]}],[{"start":{"row":30,"column":55},"end":{"row":30,"column":56},"action":"insert","lines":["x"],"id":204}],[{"start":{"row":30,"column":4},"end":{"row":30,"column":6},"action":"insert","lines":["# "],"id":205}],[{"start":{"row":31,"column":4},"end":{"row":31,"column":6},"action":"insert","lines":["# "],"id":206},{"start":{"row":32,"column":4},"end":{"row":32,"column":6},"action":"insert","lines":["# "]}],[{"start":{"row":23,"column":0},"end":{"row":23,"column":50},"action":"remove","lines":["from django.views.generic.base import TemplateView"],"id":207}],[{"start":{"row":22,"column":51},"end":{"row":23,"column":0},"action":"remove","lines":["",""],"id":208}],[{"start":{"row":30,"column":4},"end":{"row":30,"column":6},"action":"remove","lines":["# "],"id":209},{"start":{"row":31,"column":4},"end":{"row":31,"column":6},"action":"remove","lines":["# "]}],[{"start":{"row":25,"column":35},"end":{"row":25,"column":36},"action":"insert","lines":[","],"id":210}],[{"start":{"row":25,"column":36},"end":{"row":25,"column":37},"action":"insert","lines":[" "],"id":211}],[{"start":{"row":25,"column":37},"end":{"row":25,"column":38},"action":"insert","lines":["n"],"id":212}],[{"start":{"row":25,"column":38},"end":{"row":25,"column":39},"action":"insert","lines":["a"],"id":213}],[{"start":{"row":25,"column":39},"end":{"row":25,"column":40},"action":"insert","lines":["m"],"id":214}],[{"start":{"row":25,"column":40},"end":{"row":25,"column":41},"action":"insert","lines":["e"],"id":215}],[{"start":{"row":25,"column":41},"end":{"row":25,"column":42},"action":"insert","lines":[" "],"id":216}],[{"start":{"row":25,"column":42},"end":{"row":25,"column":43},"action":"insert","lines":["="],"id":217}],[{"start":{"row":25,"column":43},"end":{"row":25,"column":44},"action":"insert","lines":[" "],"id":218}],[{"start":{"row":25,"column":44},"end":{"row":25,"column":46},"action":"insert","lines":["''"],"id":219}],[{"start":{"row":25,"column":45},"end":{"row":25,"column":46},"action":"insert","lines":["h"],"id":220}],[{"start":{"row":25,"column":46},"end":{"row":25,"column":47},"action":"insert","lines":["o"],"id":221}],[{"start":{"row":25,"column":47},"end":{"row":25,"column":48},"action":"insert","lines":["m"],"id":222}],[{"start":{"row":25,"column":48},"end":{"row":25,"column":49},"action":"insert","lines":["e"],"id":223}],[{"start":{"row":25,"column":35},"end":{"row":25,"column":50},"action":"remove","lines":[", name = 'home'"],"id":224}],[{"start":{"row":30,"column":4},"end":{"row":30,"column":6},"action":"insert","lines":["# "],"id":225},{"start":{"row":31,"column":4},"end":{"row":31,"column":6},"action":"insert","lines":["# "]}],[{"start":{"row":22,"column":0},"end":{"row":22,"column":2},"action":"insert","lines":["# "],"id":226}],[{"start":{"row":17,"column":32},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":227}],[{"start":{"row":18,"column":0},"end":{"row":19,"column":0},"action":"insert","lines":["",""],"id":228}],[{"start":{"row":19,"column":0},"end":{"row":19,"column":20},"action":"insert","lines":["admin.autodiscover()"],"id":229}],[{"start":{"row":29,"column":0},"end":{"row":36,"column":65},"action":"remove","lines":["    ","    # url(r'^login/$', auth_views.login, name='login'),","    # url(r'^$', TemplateView.as_view(template_name='index.html'), name='home'),","    # url(r'^login/$', auth_views.login, {'template_name': 'core/login.html'}, name='login'),","    # url(r'^logout/$', auth_views.logout, name='logout'),","    ","    # url(r'^login/$', views.login, {'template_name': 'login.html', 'authentication_form': LoginForm}),","    # url(r'^logout/$', views.logout, {'next_page': '/login'}),  "],"id":230}],[{"start":{"row":28,"column":36},"end":{"row":29,"column":0},"action":"remove","lines":["",""],"id":231}],[{"start":{"row":22,"column":0},"end":{"row":24,"column":53},"action":"remove","lines":["# from main.forms import LoginForm","","# from django.contrib.auth import views as auth_views"],"id":232}],[{"start":{"row":21,"column":39},"end":{"row":22,"column":0},"action":"remove","lines":["",""],"id":233}],[{"start":{"row":21,"column":0},"end":{"row":21,"column":39},"action":"remove","lines":["# from django.contrib.auth import views"],"id":234}],[{"start":{"row":20,"column":0},"end":{"row":21,"column":0},"action":"remove","lines":["",""],"id":235}],[{"start":{"row":19,"column":20},"end":{"row":20,"column":0},"action":"remove","lines":["",""],"id":236}],[{"start":{"row":17,"column":32},"end":{"row":18,"column":0},"action":"remove","lines":["",""],"id":237}],[{"start":{"row":18,"column":20},"end":{"row":19,"column":0},"action":"insert","lines":["",""],"id":250}],[{"start":{"row":19,"column":0},"end":{"row":20,"column":0},"action":"insert","lines":["",""],"id":251}],[{"start":{"row":20,"column":0},"end":{"row":20,"column":50},"action":"insert","lines":["from django.views.generic.base import TemplateView"],"id":252}],[{"start":{"row":24,"column":36},"end":{"row":25,"column":0},"action":"insert","lines":["",""],"id":253},{"start":{"row":25,"column":0},"end":{"row":25,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":25,"column":4},"end":{"row":26,"column":0},"action":"insert","lines":["",""],"id":254},{"start":{"row":26,"column":0},"end":{"row":26,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":26,"column":4},"end":{"row":26,"column":83},"action":"insert","lines":["url(r'^$', TemplateView.as_view(template_name='main/home.html'), name='home2'),"],"id":255}],[{"start":{"row":26,"column":51},"end":{"row":26,"column":55},"action":"remove","lines":["main"],"id":256}],[{"start":{"row":26,"column":51},"end":{"row":26,"column":52},"action":"remove","lines":["/"],"id":257}],[{"start":{"row":26,"column":51},"end":{"row":26,"column":55},"action":"remove","lines":["home"],"id":258},{"start":{"row":26,"column":51},"end":{"row":26,"column":52},"action":"insert","lines":["p"]}],[{"start":{"row":26,"column":52},"end":{"row":26,"column":53},"action":"insert","lines":["l"],"id":259}],[{"start":{"row":26,"column":53},"end":{"row":26,"column":54},"action":"insert","lines":["z"],"id":260}],[{"start":{"row":26,"column":4},"end":{"row":26,"column":6},"action":"insert","lines":["# "],"id":262}],[{"start":{"row":20,"column":0},"end":{"row":20,"column":50},"action":"remove","lines":["from django.views.generic.base import TemplateView"],"id":263}],[{"start":{"row":26,"column":0},"end":{"row":26,"column":79},"action":"remove","lines":["    # url(r'^$', TemplateView.as_view(template_name='plz.html'), name='home2'),"],"id":264}],[{"start":{"row":25,"column":4},"end":{"row":26,"column":0},"action":"remove","lines":["",""],"id":265}],[{"start":{"row":19,"column":0},"end":{"row":21,"column":0},"action":"remove","lines":["","",""],"id":266}],[{"start":{"row":22,"column":36},"end":{"row":23,"column":4},"action":"remove","lines":["","    "],"id":267}]]},"timestamp":1477032533000}