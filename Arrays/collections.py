from collections import namedtuple

def create_list(iter):
    practiceList = []

    for i in range(iter):
        practiceList.append(i)

    return practiceList

def iterate_list():
    # Concept: List Iteration
    # Explore how to iterate through a list using a loop.
    practiceList = create_list(10)

    for index, item in enumerate(practiceList): 
        practiceList[index] = 100 * item
        print(f"I have {item} dollars")

    print(practiceList)

def list_comprehension():
    # Concept: List Comprehension
    # Explore how to use list comprehension to generate a list based on a condition.
    practiceList = create_list(5)

    doubled = [n * 2 for item in practiceList]
    evens = [n % 2 for item in practiceList if n % 2 == 0]
    

def list_slicing(start, stop, step):
    # Concept: List Slicing
    # Learn how to access portions of a list using slicing.
    practiceList = create_list(10)

    slicedList = practiceList[start:stop:step]
    print(slicedList)

def add_to_set(value):
    # Concept: Sets
    # Explore how to add elements to a set and check for membership.
    mySet = set([1, 2, 3])

    print(mySet) #to show its unordered

    mySet.add(value)

    print(mySet) #to show its unordered

def merge_sets():
    mySet = set([1, 2, 3])
    yourSet = set([4, 5, 6])

    bigSet = mySet.union(yourSet)

    print(bigSet)

def intersect_sets():
    mySet = set([1, 2, 3])
    yourSet = set([1, 5, 6])

    intersection = mySet.intersection(yourSet)

    print(intersection)

def difference_set():
    # Concept: Set Operations
    # Practice performing set operations like union, intersection, difference, and symmetric difference.
    mySet = set([1, 2, 3])
    yourSet = set([4, 5, 6])

    difference = mySet.difference(yourSet)

    print(difference)

def create_dict(name, gender, religion):
    # Concept: Dictionaries
    # Explore how to create a dictionary and add key-value pairs.
    myDict = {
        "name": name,
        "gender": gender 
    }

    myDict['religion'] = religion
    
    return myDict

create_dict("bladon", "male", "pastafarian")

def iterate_dict():
    # Concept: Dictionary Iteration
    # Learn how to iterate over keys, values, or key-value pairs in a dictionary.
    practiceDict = create_dict("bladon", "male", "pastafarian")

    for key, value in practiceDict.items():
        print(key)
        print(value)

    print('\n')

    for key in practiceDict:
        print(practiceDict[key])

    print('\n')

def wordsAndTheirLength(words):
    # Concept: Dictionary Comprehension
    # Explore how to use comprehension to generate dictionaries based on conditions.
    wordsAndTheirLengths = {word: len(word) for word in words}
    return wordsAndTheirLengths

def getLength(key):
    # Concept: Dictionary Methods
    # Explore common dictionary methods like .get(), .keys(), .values(), .items(), and .update().

    words = ["apple", "banana", "cat"]
    wordLengthDict = wordsAndTheirLength(words)

    lengthOfCat = wordLengthDict.get(key)
    return lengthOfCat

def retrieveParent(momOrDad):
    # Concept: Nested Dictionaries
    # Practice accessing and modifying elements within nested dictionaries.
    person = {
        'name': 'Bladon',
        'parents': {
            'mom': 'krista',
            'dad': 'Jason' 
        }
    }

    return person['parents'][momOrDad]

def pickNewParents(momOrDad, newParent):
    person = {
        'name': 'Bladon',
        'parents': {
            'mom': 'krista',
            'dad': 'Jason' 
        }
    }

    person['parents'][momOrDad] = newParent

    return person['parents']


def count_items_in_list():
    # Concept: Collections.Counter
    # Use the Counter from collections module to count the occurrences of elements in a list.
    array = [1, 2, 2, 3, 3, 3, 4]
    myDict = {"bob": 1, 'Jannet': 1, "billy": 10}
    print(array.count(3))
    print(list(myDict.values()).count(1))

    array_counter = Counter(array)

def sort_list():
    # Concept: List Sorting
    # Practice sorting a list in ascending or descending order, and explore using custom sort keys.
    words = ["apple", "banana", "cat", "ass", "zebra", "buns", "elephant"]
    wordsSortedAlphabetically = sorted(words)
    wordsSortedByLen = sorted(words, key = len)
    print(wordsSortedAlphabetically)
    print(wordsSortedByLen)


    numbers = [1, 5, 7, 2, 22, 44, 13 , 567, 43]
    numbersSorted = sorted(numbers)
    numbers.sort()
    print(numbers)
    print(numbersSorted)

def remove_duplicates_from_list(list1, list2):
    # Concept: Removing Duplicates
    # Learn how to remove duplicates from a list using a set or list comprehension.
    lts1 = set(list1)
    lts2 = set(list2)

    union = lts1 | lts2

    return list(union)

#print(remove_duplicates_from_list([1, 2, 3, 4], [3, 4, 5, 6]))

def remove_3s(unfilteredList):
    # Concept: Filtering Lists
    # Use list comprehension or the filter() function to filter elements from a list based on a condition.
    noThrees = [x for x in unfilteredList if x != 3]
    filteredList = list(filter(lambda x: x != 3, unfilteredList))
    return noThrees

print(remove_3s([1, 2, 3, 4]))


def map_list(numbersArray, scale):
    # Concept: Map Function
    # Use the map() function to apply a function to every item in a list.
    scaledNumbers = list(map(lambda x: x * scale, numbersArray))
    return scaledNumbers

print(map_list([1, 2, 3, 4, 5, 6], 8))

def zip_lists(*args):
    # Concept: Zipping Lists
    # Practice combining two or more lists element-wise using the zip() function.
    zipped = zip(*args)
    return zipped

print(list(zip_lists([1, 2, 3, 4, 5, 6], ['a', 'b', 'c', 'd', 'e', ], ['doh','reh','mi','fa','so','lah'])))

def create_namedtuple():
    # Concept: Named Tuples
    # Explore the namedtuple type from the collections module to create tuple-like objects with named fields.
    Point = namedTuple("Point", ['x', 'y'])

    p = Point(2, 3)

    print(p.x)
    print(p.y)

