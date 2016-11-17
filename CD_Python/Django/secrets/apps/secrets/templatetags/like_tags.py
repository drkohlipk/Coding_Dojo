from django import template

register = template.Library()

@register.simple_tag
def get_like(user_id, likes): #custom tag filter to use with the templates...checks to see if the user had already liked the secret without creating extra items on the rendered page
	liked = False #initially set liked to false
	for liker in likes: #for each like...
		if user_id == liker.id: #check to see if the user had already liked it, if they did, set liked to true, and break the loop
			liked = True
			break
		else:
			pass
	return liked #return true or false based on whether or not the user has liked this secret already.
