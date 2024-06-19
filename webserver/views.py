from django.shortcuts import render, HttpResponse, HttpResponseRedirect, redirect
from django.http import JsonResponse
import time
from rpi-ws281x import *
import argparse

LED_COUNT = 60
LED_PIN = 18
LED_FREQ_HZ = 800000
LED_DMA = 10
LED_INVERT = FALSE
LED_CHANNEL = 0
LED_BRIGHTNESS = 0
# REMEMBER TO ADD THE BRIGHTNESS BIT TO EACH VIEW
parser = argparse.ArgumentParser()
parser.add_argument('-c', '--clear', action='store_true', help='clear the display on exit')
args = parser.parse_args()

def ledInit():
    strip = Adafruit_Neopixel(LED_COUNT, LED_PIN, LED_FREQ_HZ, LED_DMA, LED_INVERT, LED_BRIGHTNESS, LED_CHANNEL)
    strip.begin()

def colorWheel(pos):
    if pos < 85:
        return Color(pos * 3, 255 - pos * 3, 0)
    elif pos < 170:
        pos -=85
        return Color(255 - pos * 3, 0, pos * 3)
    else:
        pos -= 170
        return Color(0, pos * 3, 255 - pos * 3)

# Create your views here.
# from rpi-ws281x import *
def index(request):
    return render(request, 'index.html')

def solid_blue(request):
    if request.method == 'POST':
        LED_BRIGHTNESS = request.POST.body
        ledInit()
        for x in range(LED_COUNT):
            strip.setPixelColor(x, Color(0, 0, 255))
        strip.show()
    return HttpResponse('blue')

def solid_red(request):
    if request.method == 'POST':
        LED_BRIGHTNESS = request.POST.body
        ledInit()
        for x in range(LED_COUNT):
            strip.setPixelColor(x, Color(255, 0, 0))
        strip.show()
    return HttpResponse('red')

def solid_green(request):
    if request.method == 'POST':
        LED_BRIGHTNESS = request.POST.body
        ledInit()
        for x in range(LED_COUNT):
            strip.setPixelColor(x, Color(0, 255, 0))
        strip.show()
        
    return HttpResponse('green')

def rainbow(request):
    if request.method == 'POST':
        LED_BRIGHTNESS = request.POST.body
        ledInit()
        for x in range(256):
            for y in range(strip.numPixels()):
                strip.setPixelColor(y, wheel((int(y * 256 / strip.numPixels()) + x) & 255))
            strip.show()
    return HttpResponse('rainbow type shit')

def reset_strip(request):
    if request.method == 'POST':
        for x in range(LED_COUNT):
            strip.setPixelColor(x, Color(0, 0, 0))
        strip.show()
    return HttpResponse('strip reset')

def brightnessTest1(request):
    if request.method == 'POST':
        print(request.POST.body)
    return JsonResponse({'shit': 'ass'})

def brightnessTest2(request):
    if request.method == 'POST':
        print(request.POST.body)
    return HttpResponse('ass shit')