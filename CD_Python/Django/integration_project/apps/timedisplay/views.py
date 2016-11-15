from django.shortcuts import render
from datetime import datetime
import time, pytz
from pytz import timezone
from tzlocal import get_localzone

def index(request):
	local_tz = get_localzone()
	ts = time.time()
	utc_now= datetime.utcfromtimestamp(ts)
	local_now = utc_now.replace(tzinfo=pytz.utc).astimezone(local_tz)
	context = {
		'date' : local_now.strftime('%B %-d, %Y'),
		'time' : local_now.strftime('%-I:%M:%S %p')
	}
	return render(request, "timedisplay/index.html", context)
