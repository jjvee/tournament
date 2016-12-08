#-*- coding: utf-8 -*-

from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect, HttpResponseNotFound

from .models import Game, Tournament, Matchlist, Team
from django.utils import simplejson
import datetime, json

# Create your views here.

def index(request):
    return render(request, 'main/index.html')

def manageGame(request):
    return render(request, 'main/admin/manageGame.html')
    
def createGame(request):
    return render(request, 'main/admin/createGame.html')
    
def createTour(request, game_id):
    game = Game.objects.get(gameid = game_id)
    context = {'game':game}
    return render(request, 'main/admin/createTour.html', context)
    
def createNewGame(request):
    gamename    = request.POST.get('gamename')
    region      = request.POST.get('region')
    owner       = request.POST.get('owner')
    entryfee    = request.POST.get('entryfee')
    begindate   = request.POST.get('begindate')
    enddate     = request.POST.get('enddate')
    stadium     = request.POST.get('stadium')
    
    gameid = "game" + datetime.datetime.now().strftime("%y%m%d%H%M%S%U")

    newGame = Game.objects.create(
        gameid = gameid,
        gamename = gamename,
        region   = region,
        owner    = owner,
        entryfee = entryfee,
        begindate = begindate,
        enddate  = enddate,
        stadium  = stadium
    )
    
    newGame.save()
    return HttpResponse(gameid)

def createNewTour(request):
    gameid = request.POST.get('gameid')
    tourname = request.POST.get('tourname')
    
    game = Game.objects.get(gameid = gameid)
    tourid = "tour" + datetime.datetime.now().strftime("%y%m%d%H%M%S%U")
    
    newTour = Tournament.objects.create(
        game = game,
        tourid = tourid,
        tourname = tourname
    )
    
    newTour.save()
    return HttpResponse(tourid)

def modifyGame(request):
    gameid      = request.POST.get('gameid')
    gamename    = request.POST.get('gamename')
    region      = request.POST.get('region')
    owner       = request.POST.get('owner')
    entryfee    = request.POST.get('entryfee')
    begindate   = request.POST.get('begindate')
    enddate     = request.POST.get('enddate')
    stadium     = request.POST.get('stadium')
    
    game = Game.objects.get(gameid = gameid)
    
    game.gamename = gamename
    game.region = region
    game.owner = owner
    game.entryfee = entryfee
    game.begindate = begindate
    game.enddate = enddate
    game.stadium = stadium
    
    game.save()

    return HttpResponse(gameid)

def searchGame(request):
    name = request.POST.get('gameName')
    games = None
    if name:
        try:
            games = Game.objects.filter(gamename__contains=name)
        except:
            games = None
    else:
        try:
            games = Game.objects.all()
        except:
            games = None
    
    context = {'games':games}
    return render(request, 'main/searchGame.html', context)
    
def searchAdminGame(request):
    name = request.POST.get('gameName')
    games = None
    if name:
        try:
            games = Game.objects.filter(gamename__contains=name)
        except:
            games = None
    else:
        try:
            games = Game.objects.all()
        except:
            games = None
    context = {'games':games}
    return render(request, 'main/searchAdminGame.html', context)
    
def gameMain(request, game_id):
    game = Game.objects.get(gameid = game_id)
    context = {'game':game}
    return render(request, 'main/gameMain.html', context)
    
def tourMain(request, game_id):
    game = Game.objects.get(gameid = game_id)
    tours = Tournament.objects.filter(game = game)
    
    tourid = request.POST.get('tourid')
    tourdetail = None
    matches = None
    
    if tourid :
        tourdetail = Tournament.objects.get(game = game, tourid = tourid)
        matches = Matchlist.objects.filter(game = game, tournament = tourdetail)
        print matches
    
    context = {'game':game, 'tours':tours, 'tourdetail':tourdetail, 'matches':matches}
    return render(request, 'main/tourMain.html', context)
    
def adminGame(request, game_id):
    game = Game.objects.get(gameid = game_id)
    begindate = str(game.begindate)
    enddate = str(game.enddate)
    print begindate, enddate
    context = {'game':game, 'begindate':begindate, 'enddate':enddate}
    return render(request, 'main/admin/adminGame.html', context)
    
def adminTour(request, game_id):
    game = Game.objects.get(gameid = game_id)
    tours = Tournament.objects.filter(game = game)
    context = {'game':game, 'tours':tours}
    return render(request, 'main/admin/adminTour.html', context)
    
def adminTourResult(request, game_id, tour_id):
    game = Game.objects.get(gameid = game_id)
    tours = Tournament.objects.filter(game = game)
    
    tourdetail = None
    matches = None
    results = []
    # a = {}
    # a['age'] = 30
    # results.append(a)
    # print results
    
    seed = 1
    
    if tour_id:
        if tour_id != 'init':
            tourdetail = Tournament.objects.get(game = game, tourid = tour_id)
            matches = Matchlist.objects.filter(game = game, tournament = tourdetail)
            
            if tourdetail.teamcount:
                tourdetail.teamcount = int(tourdetail.teamcount)
            
            if matches:
                for match in matches:
                    try:
                        match.team_a_obj = Team.objects.get(game = game, teamid = match.team_a)
                    except:
                        match.team_a_obj = None
                    
                    try:
                        match.team_b_obj = Team.objects.get(game = game, teamid = match.team_b)
                    except:
                        match.team_a_obj = None
                    
                    middle['play']
                    if match.matchseq == '1':
                        middle = {}
                        middle['name'] = 'test test'
                        middle['playername1'] = match.team_a_obj.teamname
                        middle['seed'] = seed
                        middle['teamid'] = match.team_a
                        middle['tourid'] = tour_id
                        results.append(middle)
                        
                        seed = seed + 1
                        
                        middle = {}
                        middle['name'] = 'test test'
                        middle['playername1'] = match.team_a_obj.teamname
                        middle['seed'] = seed
                        middle['teamid'] = match.team_b
                        middle['tourid'] = tour_id
                        results.append(middle)
                        
                        seed = seed + 1
                    
    print results            
            
    
    context = {'game':game, 'tours':tours, 'tourdetail':tourdetail, 'matches':matches, 'results':results}
    return render(request, 'main/admin/adminTourResult.html', context)

def adminTourResultProc(request):
    gameid = request.POST.get('gameid')
    tourid = request.POST.get('tourid')
    currentmatch = request.POST.get('currentMatch')
    nextmatch = request.POST.get('nextMatch')
    
    currentmatchlist = json.loads(currentmatch)
    nextmatchlist = json.loads(nextmatch)
    
    game = Game.objects.get(gameid = gameid)
    tournament = Tournament.objects.get(game = game, tourid = tourid)

    for match in currentmatchlist:
        team_a_score = match['team_a_score']
        team_b_score = match['team_b_score']
        winner       = match['winner']
        matchid      = match['matchId']
        matchseq     = match['matchSeq']
        
        matchObj = Matchlist.objects.get(game = game, tournament = tournament, matchid = matchid, matchseq = matchseq)
        matchObj.team_a_score = team_a_score
        matchObj.team_b_score = team_b_score
        matchObj.winner = winner
        matchObj.save()
        
    for nextmatch in nextmatchlist:
        currentwinner = nextmatch['winner']
        nextmatchid = nextmatch['matchId']
        nextteam = nextmatch['teamLocation']
        
        matchObj = Matchlist.objects.get(game = game, tournament = tournament, matchid = nextmatchid)
        
        if nextteam == 'team_a':
            matchObj.team_a = currentwinner
        elif nextteam == 'team_b':
            matchObj.team_b = currentwinner
        
        matchObj.save()
    
    return HttpResponse("ok")