#-*- coding: utf-8 -*-

from django.contrib import admin
from django.conf.urls import url, include
from . import views
from django.contrib.auth import views as auth_views

app_name = 'main'
urlpatterns = [
    url(r'^$', views.index, name='home'),
    url(r'^main/$', views.index),
    url(r'^login/$', views.login_user),
    url(r'^loginProc/$', views.login_user),
    # url(r'^login/$', auth_views.login, {'template_name': 'core/login.html'}, name='login'),
    url(r'^logout/$', auth_views.logout, {'template_name':'core/logoutComplete.html'}),
    
    url(r'^searchGame/$', views.searchGame),
    url(r'^searchAdminGame/$', views.searchAdminGame),
    url(r'^manageGame/$', views.manageGame),
    url(r'^createGame/$', views.createGame),
    url(r'^modifyGame/$', views.modifyGame),
    url(r'^deleteGame/$', views.deleteGame),
    url(r'^adminGame/(?P<game_id>.+)/$', views.adminGame),
    url(r'^adminGameTeam/(?P<game_id>.+)/$', views.adminGameTeam),
    url(r'^addTeam/(?P<game_id>.+)/$', views.addTeam),
    url(r'^addTeamProc/$', views.addTeamProc),
    url(r'^deleteTeam/(?P<game_id>.+)/$', views.deleteTeam),
    url(r'^deleteTeamProc/$', views.deleteTeamProc),
    url(r'^adminTour/(?P<game_id>.+)/$', views.adminTour),
    url(r'^adminTourInfo/(?P<game_id>.+)/(?P<tour_id>.+)/$', views.adminTourInfo),
    url(r'^adminTourInfoProc/$', views.adminTourInfoProc),
    url(r'^deleteTourProc/$', views.deleteTourProc),
    url(r'^adminTourDetail/(?P<game_id>.+)/(?P<tour_id>.+)/$', views.adminTourDetail),
    url(r'^adminTourDetailProc/$', views.adminTourDetailProc),
    url(r'^adminTourResult/(?P<game_id>.+)/(?P<tour_id>.+)/$', views.adminTourResult),
    url(r'^adminTourResultProc/$', views.adminTourResultProc),
    url(r'^createTour/(?P<game_id>.+)/$', views.createTour),
    url(r'^createNewGame/$', views.createNewGame),
    url(r'^createNewTour/$', views.createNewTour),
    url(r'^gameMain/(?P<game_id>.+)/$', views.gameMain),
    url(r'^tourMain/(?P<game_id>.+)/$', views.tourMain),
    
    url(r'^boardList/(?P<board_type>.+)/(?P<game_id>.+)/$', views.boardList),
    url(r'^boardView/(?P<board_type>.+)/(?P<game_id>.+)/(?P<board_id>.+)/$', views.boardView),
    url(r'^boardWrite/(?P<board_type>.+)/(?P<game_id>.+)/$', views.boardWrite),
    url(r'^boardWriteProc/$', views.boardWriteProc),
    url(r'^boardDeleteProc/$', views.boardDeleteProc),
    
    url(r'^boardModify/(?P<board_type>.+)/(?P<game_id>.+)/(?P<board_id>.+)/$', views.boardModify),
    url(r'^boardModifyProc/$', views.boardModifyProc),
    url(r'^signup/$', views.signup),
    url(r'^signupProc/$', views.signupProc),
]