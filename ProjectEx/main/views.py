from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def index(request) :
    #return HttpResponse("기본 요청에 대한 응답입니다.")
    return render(request,'main/index.html')