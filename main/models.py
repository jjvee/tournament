from __future__ import unicode_literals

import os
import datetime

from django.db import models
from django.contrib.auth.models import User

# Create your models here.
def get_image_path(instance, filename):
    path = instance.gameid + '-' + filename
    return os.path.join('static/img/poster', path)
    
class Game(models.Model):
    gameid = models.CharField(max_length=30, null=False, blank=False)
    owner = models.CharField(max_length=20, null=True, blank=True)
    gamename = models.CharField(max_length=100, null=True, blank=True)
    region = models.CharField(max_length=20, null=True, blank=True)
    begindate = models.DateField(null=True, blank=True)
    enddate = models.DateField(null=True, blank=True)
    gameclass = models.CharField(max_length=100, null=True, blank=True)
    level = models.CharField(max_length=100, null=True, blank=True)
    gender = models.CharField(max_length=20, null=True, blank=True)
    entryfee = models.CharField(max_length=20, null=True, blank=True)
    poster = models.CharField(max_length=300, null=True, blank=True)
    stadium = models.CharField(max_length=300, null=True, blank=True)
    teamtype = models.CharField(max_length=3, null=True, blank=True)
    regtype = models.CharField(max_length=3, null=True, blank=True)
    masteruser = models.ForeignKey(User, null=False, blank=False, default='')
    poster = models.ImageField(upload_to=get_image_path)
    
    def __str__(self):
		return self.gamename
		
class Tournament(models.Model):
    game = models.ForeignKey(Game)
    tourid = models.CharField(max_length=30, null=False, blank=False)
    tourname = models.CharField(max_length=100, null=True, blank=True)
    teamcount = models.CharField(max_length=5, null=True, blank=True)
    
    def __str__(self):
        return self.tourname
        
class Team(models.Model):
    game = models.ForeignKey(Game)
    teamid = models.CharField(max_length=30, null=False, blank=False)
    teamname = models.CharField(max_length=100, null=True, blank=True)
    
    def __str__(self):
        text = self.game.gamename + ' / ' + self.teamname + ' / ' + self.teamid
        return text

class TeamPlayer(models.Model):
    team = models.ForeignKey(Team)
    player = models.ForeignKey(User, null=False, blank=False, default='')
    
    def __str__(self):
        text = self.team.teamname + ' / ' + self.player.username
        return text
        
class TournamentTeam(models.Model):
    game = models.ForeignKey(Game)
    tournament = models.ForeignKey(Tournament)
    team = models.ForeignKey(Team)
    matchid = models.CharField(max_length=5, null=True, blank=True)
    matchseq = models.CharField(max_length=5, null=True, blank=True)
    teamside = models.CharField(max_length=5, null=True, blank=True)
    
    def __str__(self):
        text = self.game.gamename + '/' + self.tournament.tourname + '/' + self.team.teamname
        return text
        
class Matchlist(models.Model):
    game = models.ForeignKey(Game)
    tournament = models.ForeignKey(Tournament)
    matchid = models.CharField(max_length=5, null=True, blank=True)
    matchseq = models.CharField(max_length=5, null=True, blank=True)
    team_a = models.CharField(max_length=30, null=True, blank=True)
    team_b = models.CharField(max_length=30, null=True, blank=True)
    team_a_score = models.CharField(max_length=10, null=True, blank=True)
    team_b_score = models.CharField(max_length=10, null=True, blank=True)
    winner = models.CharField(max_length=20, null=True, blank=True)
    
    def __str__(self):
        text = self.game.gamename +'/'+ self.tournament.tourname +'/'+ self.team_a + '_vs_' + self.team_b
        return text
        
class BoardCont(models.Model):
    boardtype = models.CharField(max_length=30, null=True, blank=True)
    game = models.ForeignKey(Game, null=True, blank=True)
    title = models.CharField(max_length=255, null=True, blank=True)
    cont = models.TextField(null=True, blank=True)
    hits = models.IntegerField()
    insertdate = models.DateTimeField(null=True, blank=True)
    updatedate = models.DateTimeField(null=True, blank=True)
    insertuser = models.ForeignKey(User, null=False, blank=False, default='')
    
    def __str__(self):
        gamename = ""
        if self.game:
            gamename = self.game.gamename
        else:
            gamename = "Null"
            
        text = self.boardtype + '/' + gamename + '/' + self.title
        return text