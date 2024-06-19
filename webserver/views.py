from django.shortcuts import render, HttpResponse, HttpResponseRedirect, redirect
from django.http import JsonResponse

# Create your views here.
# from rpi-ws281x import *
def index(request):
    return render(request, 'index.html')

def solid_blue(request):
    return HttpResponse('blue')

def solid_red(request):
    if request.method == 'POST':
        print(request.body)
    return HttpResponse('red')

def solid_green(request):
    return HttpResponse('green')

def rainbow(request):
    return HttpResponse('rainbow type shit')

def reset_strip(request):
    return HttpResponse('strip reset')

def brightnessTest1(request):
    if request.method == 'POST':
        print(request.POST.body)
    return JsonResponse({'shit': 'ass'})

def brightnessTest2(request):
    if request.method == 'POST':
        print(request.POST.body)
    return HttpResponse('ass shit')