#Measure some strings
animals = ['Lion','Tiger', 'Wolf']
for animal in animals:
	print(animal, len(animal))

#create a sample collection
wildAnimals = {'Lion':'predator', 'Tiger':'predator', 'Wolf':'Predator', 'Deer':'Prey'}

#Strategy: Iterate over copy
for wildAnimal, status in wildAnimals.copy().items():
	if status == 'Prey':
		del wildAnimals[wildAnimal]

print(wildAnimals)
