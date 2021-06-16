from django.shortcuts import render
from django.db.models.query import QuerySet
from django.shortcuts import render, get_object_or_404
from django.http import Http404, JsonResponse
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.serializers import Serializer
from . import searchDB
# Create your views here.


class SearchView(APIView):
    def post(self, request, format=None):
        print(request.data)
        person = request.data["person"]
        relation = request.data["relation"]
        result = searchDB.search(person, relation)
        return Response(result)
