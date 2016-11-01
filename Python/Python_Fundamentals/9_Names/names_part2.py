users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

name = ''

def print_students(peeps):
	for key, data in peeps.items():
          print key
          for idx, value in enumerate(data):
               name = value['first_name'].upper() + ' ' + value['last_name'].upper()
               print '{} - {} - {}'.format(idx+1, name, len(name)-1)

print_students(users)
