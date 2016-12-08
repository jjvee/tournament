from django.contrib import admin

from .models import Game, Tournament, Matchlist, Team, TeamPlayer, TournamentTeam, BoardCont
# Register your models here.

admin.site.register(Game)
admin.site.register(Tournament)
admin.site.register(Matchlist)
admin.site.register(Team)
admin.site.register(TeamPlayer)
admin.site.register(TournamentTeam)
admin.site.register(BoardCont)