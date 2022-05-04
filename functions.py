#function
def fib(n):
	a,b = 0,1
	while a < n:
		print(a,end='\t')
		a,b=b,a+b
	print()

#returning  a list
def generateSeries(n):
	result= []
	a,b=0,1
	while a < n:
		result.append(a)
		a,b=b,a+b
	return result

n=int(input("Enter any number"))
fib(n)	
print(generateSeries(n))
