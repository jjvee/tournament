#-*- coding: utf-8 -*-

from django.http import *
from django.shortcuts import render, get_object_or_404, render_to_response, redirect
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.template import RequestContext

from .models import Game, Tournament, Matchlist, Team, TournamentTeam, BoardCont
from django.utils import timezone
import datetime, json

# Create your views here.

def login_user(request):
    username = password = ''
    if request.POST:
        username = request.POST['username']
        password = request.POST['password']
        
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                context = {'name':user.first_name}
                return render(request, 'core/loginComplete.html', context)
            context = {'next':'/', 'check':'not_active'}
            return render(request, 'core/login.html', context)
        context = {'next':'/', 'check':'false'}
        return render(request, 'core/login.html', context)
    context = {'next':'/'}
    return render(request, 'core/login.html', context)

def index(request):
    return render(request, 'main/index.html')

@login_required
def manageGame(request):
    return render(request, 'main/admin/manageGame.html')

@login_required   
def createGame(request):
    return render(request, 'main/admin/createGame.html')

@login_required 
def createTour(request, game_id):
    game = Game.objects.get(gameid = game_id)
    context = {'game':game}
    return render(request, 'main/admin/createTour.html', context)
    
    
@login_required
@csrf_exempt
def createNewGame(request):
    gamename    = request.POST.get('gamename')
    region      = request.POST.get('region')
    owner       = request.POST.get('owner')
    entryfee    = request.POST.get('entryfee')
    begindate   = request.POST.get('begindate')
    enddate     = request.POST.get('enddate')
    stadium     = request.POST.get('stadium')
    poster      = request.FILES.get('poster')
    masteruser  = request.user
    
    gameid = "game" + datetime.datetime.now().strftime("%y%m%d%H%M%S%U")
    
    newGame = Game.objects.create(
        gameid = gameid,
        gamename = gamename,
        region   = region,
        owner    = owner,
        entryfee = entryfee,
        begindate = begindate,
        enddate  = enddate,
        stadium  = stadium,
        poster   = poster,
        masteruser = masteruser
    )
    
    newGame.save()
    return HttpResponse(gameid)

@login_required
def createNewTour(request):
    gameid = request.POST.get('gameid')
    tourname = request.POST.get('tourname')
    teamcount = request.POST.get('teamcount')
    
    game = Game.objects.get(gameid = gameid)
    tourid = "tour" + datetime.datetime.now().strftime("%y%m%d%H%M%S%U")
    
    newTour = Tournament.objects.create(
        game = game,
        tourid = tourid,
        teamcount = teamcount,
        tourname = tourname
    )
    
    newTour.save()
    return HttpResponse(tourid)

@login_required
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

@login_required
def modifyGamePoster(request):
    gameid = request.POST.get('gameidposter')
    poster = request.FILES.get('poster')

    game = Game.objects.get(gameid = gameid)
    
    game.poster = poster
    
    game.save()

    return HttpResponse(gameid)

@login_required
def deleteGame(request):
    gameid = request.POST.get('gameid')
    game = Game.objects.get(gameid = gameid)
    
    game.delete()
    return HttpResponse("ok")
    
def searchGame(request):
    name = request.POST.get('gameName')
    games = None
    print name
    if name:
        try:
            games = Game.objects.filter(gamename__contains=name).order_by('-id')
        except:
            games = None
    else:
        try:
            games = Game.objects.all()
        except:
            games = None
    
    if games:
        for game in games:
            game.begindate = str(game.begindate)
            game.enddate = str(game.enddate)
    
    context = {'games':games}
    return render(request, 'main/searchGame.html', context)

@login_required
def searchAdminGame(request):
    games = None
    
    try:
        games = Game.objects.filter(masteruser=request.user).order_by('-id')
    except:
        games = None
    
    context = {'games':games}
    return render(request, 'main/admin/searchAdminGame.html', context)
    
def gameMain(request, game_id):
    game = Game.objects.get(gameid = game_id)
    begindate = str(game.begindate)
    enddate = str(game.enddate)
    print begindate
    context = {'game':game, 'begindate':begindate, 'enddate':enddate}
    return render(request, 'main/gameMain.html', context)
    
def tourMain(request, game_id):
    game    = Game.objects.get(gameid = game_id)
    tours   = Tournament.objects.filter(game = game)
    tour_id = request.POST.get('tourid')
    
    tourdetail  = None
    matches     = None
    results     = []
    seed        = 1
    
    if tour_id:
        tourdetail = Tournament.objects.get(game = game, tourid = tour_id)
        matches = Matchlist.objects.filter(game = game, tournament = tourdetail)
        
        if tourdetail.teamcount:
            tourdetail.teamcount = int(tourdetail.teamcount)
        
        if matches:
            for match in matches:
                try:
                    match.team_a_obj = Team.objects.get(game = game, teamid = match.team_a)
                    middle = {}
                    middle['clubname1'] = match.team_a_obj.teamname
                    middle['clubname2'] = match.team_a_obj.teamname
                    middle['playername1'] = match.team_a_obj.teamname
                    middle['playername2'] = match.team_a_obj.teamname
                    middle['seed'] = seed
                    middle['teamid'] = match.team_a
                    middle['tourid'] = tour_id
                    results.append(middle)
                    
                    seed = seed + 1
                except:
                    match.team_a_obj = None
                
                try:
                    match.team_b_obj = Team.objects.get(game = game, teamid = match.team_b)
                    middle = {}
                    middle['clubname1'] = match.team_b_obj.teamname
                    middle['clubname2'] = match.team_b_obj.teamname
                    middle['playername1'] = match.team_b_obj.teamname
                    middle['playername2'] = match.team_b_obj.teamname
                    middle['seed'] = seed
                    middle['teamid'] = match.team_b
                    middle['tourid'] = tour_id
                    results.append(middle)
                    
                    seed = seed + 1
                except:
                    match.team_a_obj = None
            
    data = json.dumps(results)
    context = {'game':game, 'tours':tours, 'tourdetail':tourdetail, 'matches':matches, 'results':data}
    return render(request, 'main/tourMain.html', context)

@login_required    
def adminGame(request, game_id):
    game = Game.objects.get(gameid = game_id)
    
    if game.masteruser == request.user:
        begindate = str(game.begindate)
        enddate = str(game.enddate)
        context = {'game':game, 'begindate':begindate, 'enddate':enddate}
        return render(request, 'main/admin/adminGame.html', context)
    else:
        return redirect('/')

@login_required    
def adminGameTeam(request, game_id):
    game = Game.objects.get(gameid = game_id)
    teams = None
    
    try:
        teams = Team.objects.filter(game = game)
    except:
        teams = None
    
    context = {'game':game, 'teams':teams}    
    return render(request, 'main/admin/adminGameTeam.html', context)

@login_required    
def addTeam(request, game_id):
    game = Game.objects.get(gameid = game_id)
    context = {'game':game}   
    return render(request, 'main/admin/addTeam.html', context)

@csrf_exempt
def addTeamProc(request):
    gameid   = request.POST.get('gameId')
    teamlist = json.loads(request.POST.get('teamList'))
    game     = Game.objects.get(gameid = gameid)
    
    teamid = 0
    try:
        team = Team.objects.filter(game = game).latest("teamid")
        teamid = int(team.teamid[4:])
    except:
        teamid = 0
    
    for team in teamlist:
        teamid += 1
        newTeam = Team.objects.create(
            game = game,
            teamid = 'team' + str(teamid).zfill(4),
            teamname = team['teamname'],
        ).save()
    
    return HttpResponse("ok")

@login_required    
def deleteTeam(request, game_id):
    game = Game.objects.get(gameid = game_id)
    teams = None
    
    try:
        teams = Team.objects.filter(game = game)
    except:
        teams = None
    
    context = {'game':game, 'teams':teams}  
    return render(request, 'main/admin/deleteTeam.html', context)
 
@csrf_exempt
def deleteTeamProc(request):
    gameid   = request.POST.get('gameId')
    teamlist = json.loads(request.POST.get('teamList'))
    game     = Game.objects.get(gameid = gameid)
    
    for team in teamlist:
        # 관련 토너먼트 정보 삭제.
        try:
            teamobj = Team.objects.get(game = game, teamid = team["teamid"])
        except:
            teamobj = None
        
        if teamobj != None :
            try:
                tourteamobjs = TournamentTeam.objects.filter(game = game, team = teamobj)
            except:
                tourteamobjs = None
            
            if tourteamobjs != None:
                for tourteamobj in tourteamobjs:
                    try:
                        delmatchlist = Matchlist.objects.filter(game = game, tournament = tourteamobj.tournament)
                        delmatchlist.delete()
                    except:
                        pass
                    
                    try:
                        deltourteam = TournamentTeam.objects.filter(game = game, tournament = tourteamobj.tournament)
                        deltourteam.delete()
                    except:
                        pass
    
            # 대회 팀 삭제.
            try:
                teamobj.delete()
            except:
                pass
        
    return HttpResponse("OK")

@login_required
def adminTour(request, game_id):
    game = Game.objects.get(gameid = game_id)
    tours = Tournament.objects.filter(game = game)
    context = {'game':game, 'tours':tours}
    return render(request, 'main/admin/adminTour.html', context)

@login_required
def adminTourInfo(request, game_id, tour_id):
    game = Game.objects.get(gameid = game_id)
    tour = Tournament.objects.get(game = game, tourid = tour_id)
    
    context = {'game':game, 'tour':tour}
    return render(request, 'main/admin/adminTourInfo.html', context)

@login_required    
def adminTourInfoProc(request):
    gameid = request.POST.get('gameid')
    tourid = request.POST.get('tourid')
    tourname  = request.POST.get('tourname')
    teamcount = request.POST.get('teamcount')
    
    game = Game.objects.get(gameid = gameid)
    tour = Tournament.objects.get(game = game, tourid = tourid)
    
    if tour.teamcount == teamcount:
        tour.tourname = tourname
        tour.save()
    else:
        try:
            tourteams = TournamentTeam.objects.filter(game = game, tournament = tour)
            tourteams.delete()
        except:
            tourteams = None
            
        try:
            matches = Matchlist.objects.filter(game = game, tournament = tour)
            matches.delete()
        except:
            matches = None
        
        tour.tourname = tourname
        tour.teamcount = teamcount
        tour.save()

    return HttpResponse("ok")

@login_required
def deleteTourProc(request):
    gameid = request.POST.get('gameid')
    tourid = request.POST.get('tourid')
    
    game = Game.objects.get(gameid = gameid)
    tour = Tournament.objects.get(game = game, tourid = tourid)
    
    try:
        tourteams = TournamentTeam.objects.filter(game = game, tournament = tour)
        tourteams.delete()
    except:
        tourteams = None
        
    try:
        matches = Matchlist.objects.filter(game = game, tournament = tour)
        matches.delete()
    except:
        matches = None
    
    tour.delete()

    return HttpResponse("OK")

@login_required    
def adminTourDetail(request, game_id, tour_id):
	
    game = Game.objects.get(gameid = game_id)
    tour = Tournament.objects.get(game = game, tourid = tour_id)
    teamlist = []
    tourteamlist = []
    
    try:
        tourteams = TournamentTeam.objects.filter(game = game, tournament = tour)
        
        for tourteam in tourteams:
            middle = {}
            middle['gameid'] = tourteam.game.gameid
            middle['tourid'] = tourteam.tournament.tourid
            middle['teamid'] = tourteam.team.teamid
            middle['matchid'] = tourteam.matchid
            middle['matchseq'] = tourteam.matchseq
            middle['teamside'] = tourteam.teamside
            tourteamlist.append(middle)
        tourteamlist = json.dumps(tourteamlist)
    except:
        tourteams = None
        
    try:
        teams = Team.objects.filter(game = game)
        
        for team in teams:
            middle = {}
            middle['gameid'] = team.game.gameid
            middle['teamid'] = team.teamid
            middle['teamname'] = team.teamname
            teamlist.append(middle)
        teamlist = json.dumps(teamlist)
    except:
        teamlist = []
    
    context = {'game':game, 'tour':tour, 'teamlist':teamlist, 'tourteamlist':tourteamlist}
    return render(request, 'main/admin/adminTourDetail.html', context)

@csrf_exempt
def adminTourDetailProc(request):
    gameid = request.POST.get('gameId')
    tourid = request.POST.get('tourId')
    tourlist = request.POST.get('tourList')
    tourteamlist = request.POST.get('tourTeamList')
    
    matchlist = json.loads(tourlist)
    tourteam = json.loads(tourteamlist)
    
    game = Game.objects.get(gameid = gameid)
    tour = Tournament.objects.get(game = game, tourid = tourid)
    
    try:
        matches = Matchlist.objects.filter(game = game, tournament = tour)
        matches.delete()
    except:
        matches = None
        
    for match in matchlist:
        newMatch = Matchlist.objects.create(
            game = game,
            tournament = tour,
            matchid = match['matchId'],
            matchseq = match['matchSeq'],
            team_a = match['team_a'],
            team_b = match['team_b'],
            team_a_score = 0,
            team_b_score = 0,
            winner = "",
        )
        newMatch.save()
    
    try:
        tourteams = TournamentTeam.objects.filter(game = game, tournament = tour)
        tourteams.delete()
    except:
        tourteams = None
        
    for team in tourteam:
        teamobj = Team.objects.get(game = game, teamid = team['teamId'])
        newTourTeam = TournamentTeam.objects.create(
            game = game,
            tournament = tour,
            team = teamobj,
            matchid = team['matchId'],
            matchseq = team['matchSeq'],
            teamside = team['teamSide'],
        )
        newTourTeam.save()
    
    return HttpResponse("ok")

@login_required    
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
                        middle = {}
                        middle['clubname1'] = match.team_a_obj.teamname
                        middle['clubname2'] = match.team_a_obj.teamname
                        middle['playername1'] = match.team_a_obj.teamname
                        middle['playername2'] = match.team_a_obj.teamname
                        middle['seed'] = seed
                        middle['teamid'] = match.team_a
                        middle['tourid'] = tour_id
                        results.append(middle)
                        
                        seed = seed + 1
                    except:
                        match.team_a_obj = None
                    
                    try:
                        match.team_b_obj = Team.objects.get(game = game, teamid = match.team_b)
                        middle = {}
                        middle['clubname1'] = match.team_b_obj.teamname
                        middle['clubname2'] = match.team_b_obj.teamname
                        middle['playername1'] = match.team_b_obj.teamname
                        middle['playername2'] = match.team_b_obj.teamname
                        middle['seed'] = seed
                        middle['teamid'] = match.team_b
                        middle['tourid'] = tour_id
                        results.append(middle)
                        
                        seed = seed + 1
                    except:
                        match.team_a_obj = None
            
    data = json.dumps(results)
    context = {'game':game, 'tours':tours, 'tourdetail':tourdetail, 'matches':matches, 'results':data}
    return render(request, 'main/admin/adminTourResult.html', context)

@login_required
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
    
def boardList(request, board_type, game_id):
    boardTypeText = "";
    
    if board_type == 'notice':
        boardTypeText = '공지사항'    
    elif board_type == 'free':
        boardTypeText = '자유게시판'
    elif board_type == 'qna':
        boardTypeText = 'QnA'
    elif board_type == 'game':
        boardTypeText = '대회게시판'
        
    if board_type == 'game':
        game = Game.objects.get(gameid = game_id)
        boardList = BoardCont.objects.filter(boardtype = board_type, game = game).order_by('-id')
    else:
        game = "";
        boardList = BoardCont.objects.filter(boardtype = board_type).order_by('-id')
        
    if boardList:
        for board in boardList:
            board.insertdate = str(board.insertdate)[:10]
    
    context = {'boardtype':board_type, 'boardtypetext':boardTypeText, 'boardlist':boardList,'gameid':game_id, 'game':game}
    return render(request, 'main/board/boardList.html', context)

def boardView(request, board_type, game_id, board_id):
    
    boardTypeText = ""
    owner = False
    
    if board_type == 'notice':
        boardTypeText = '공지사항'    
    elif board_type == 'free':
        boardTypeText = '자유게시판'
    elif board_type == 'qna':
        boardTypeText = 'QnA'
    elif board_type == 'game':
        boardTypeText = '대회게시판'
        
    if board_type == 'game':
        game = Game.objects.get(gameid = game_id)
    else:
        game = ""
        
    board = BoardCont.objects.get(boardtype = board_type, id = board_id)
    board.insertdate = str(board.insertdate)[:19]
    
    board.hits = board.hits + 1
    board.save()
    
    if board.insertuser == request.user :
        owner = True

    context = {'boardtype':board_type, 'boardtypetext':boardTypeText, 'board':board, 'gameid':game_id, 'game':game, 'owner':owner}
    return render(request, 'main/board/boardView.html', context)

@login_required    
def boardWrite(request, board_type, game_id):
    
    boardTypeText = "";
    user = request.user
    
    if board_type == 'notice':
        boardTypeText = '공지사항'    
    elif board_type == 'free':
        boardTypeText = '자유게시판'
    elif board_type == 'qna':
        boardTypeText = 'QnA'
    elif board_type == 'game':
        boardTypeText = '대회게시판'
        
    if board_type == 'game':
        game = Game.objects.get(gameid = game_id)
    else:
        game = "";
    
    context = {'boardtype':board_type, 'boardtypetext':boardTypeText, 'gameid':game_id, 'user':user, 'game':game}
    return render(request, 'main/board/boardWrite.html', context)

@login_required    
def boardWriteProc(request):
    title = request.POST.get('title')
    cont = request.POST.get('cont')
    boardType = request.POST.get('boardType')
    gameId = request.POST.get('gameId')
    
    insertuser  = request.user
    
    if (boardType == 'game'):
        game = Game.objects.get(gameid = gameId)
        newArticle = BoardCont.objects.create(
            boardtype = boardType,
            game = game,
            title = title,
            cont = cont,
            hits = 0,
            insertuser = insertuser,
            insertdate = datetime.datetime.now()
        )
    else:
        newArticle = BoardCont.objects.create(
            boardtype = boardType,
            title = title,
            cont = cont,
            hits = 0,
            insertuser = insertuser,
            insertdate = datetime.datetime.now()
        )
    
    newArticle.save()
    
    return HttpResponse("ok")

@login_required    
def boardDeleteProc(request):
    boardId = request.POST.get('boardId')
    boardType = request.POST.get('boardType')
    gameId = request.POST.get('gameId')
    
    board = BoardCont.objects.get(id = boardId)
    
    if (board.insertuser == request.user):
        board.delete()
    else:
        return HttpResponse("no")
    
    return HttpResponse("ok")
    
@login_required    
def boardModify(request, board_type, game_id, board_id):
    
    boardTypeText = "";
    owner = False
    user = request.user
    
    if board_type == 'notice':
        boardTypeText = '공지사항'    
    elif board_type == 'free':
        boardTypeText = '자유게시판'
    elif board_type == 'qna':
        boardTypeText = 'QnA'
    elif board_type == 'game':
        boardTypeText = '대회게시판'
    
    if board_type == 'game':
        game = Game.objects.get(gameid = game_id)
    else:
        game = "";
        
    board = BoardCont.objects.get(id=board_id)
    
    if board.insertuser == request.user :
        owner = True
    
    context = {'boardtype':board_type, 'boardtypetext':boardTypeText, 'gameid':game_id, 'board':board, 'game':game, 'owner':owner}
    return render(request, 'main/board/boardModify.html', context)

@login_required    
def boardModifyProc(request):
    title = request.POST.get('title')
    cont = request.POST.get('cont')
    boardType = request.POST.get('boardType')
    gameId = request.POST.get('gameId')
    boardId = request.POST.get('boardId')
    
    board = BoardCont.objects.get(id = boardId)
    
    if board.insertuser != request.user:
        return HttpResponse("no")
        
    board.title = title
    board.cont = cont
    
    board.save()
    
    return HttpResponse("ok")
    
def signup(request):
    return render(request, 'core/signup.html')
    
def signupProc(request):
    email = request.POST.get('email')
    name = request.POST.get('name')
    pw = request.POST.get('pw')
    
    try:
        existuser = User.objects.get(username = email)
        if existuser:
            return HttpResponse("email_exist")
    except:
        pass
    
    user = User.objects.create_user(username=email,email=email,password=pw,first_name=name)
    # user.email_user('hello', 'message', from_email='noReply@mintonz.com')
    return HttpResponse("ok")