class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"I'm {self.name} and I'm {self.age}"

    def greetings(self):
        print(f"Hello! My name is {self.name}")

class Employee(Person):
    EID = 1
    def __init__(self, name, age, job_title):
        super().__init__(name, age)
        self.job_title = job_title
        self.ID = Employee.EID
        Employee.EID += 1

class BankAccount:
    id = 0

    def __init__(self, balance, password, account_holder):
        self.__balance = balance
        self.__password = password
        self.__id = BankAccount.id
        self.account_holder = account_holder

        self.incrementID()

    def get_balance(self, password):
        if self.__password == password:
            return self.__balance
        else:
            return "Error: Wrong password"
    
    @staticmethod
    def getHelpNumber(self):
        print("8675309")

    @classmethod
    def incrementID(self):
        BankAccount.id += 1

class Point {
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, point):
        self.x += point.x
        self.y += point.y

    def __str__():
        print(f"Point: x:{x}")
}
        


myAccount = BankAccount(0, "password", "Bladon Garland")
bladon = Person("Bladon", 20)
point1 = Point(1, 2)
point2 = Point(5, 1)

point1.add(point2)

print(point1)

Point.add
print(myAccount.account_holder)
print(myAccount.get_balance("passwod"))
print(bladon)
