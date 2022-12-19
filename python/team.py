import csv
from member import Member

class Team:
    def __init__(self, t):
        self.team = t
        self.filepath = f"./raw/{self.team}.csv"
        self.members = []
        self.events = []
        self.getEvents()
        self.summary()

    # def getMembers(self):
    #     with open(self.filepath, "r") as file:
    #         reader = csv.reader(file)
    #         memberList = next(reader)[1:]
    #         for name in memberList:
    #             self.members.append(Member(name, self.team))

    def getEvents(self):
        with open(self.filepath, "r") as file:
            reader = csv.reader(file)
            memberList = next(reader)[1:]
            for name in memberList:
                self.members.append(Member(name, self.team))
            for row in reader:
                for i in range(len(row)):
                    if row[i] == "X":
                        self.members[i - 1].addEvent(row[0])

    def summary(self):
        for member in self.members:
            print(member)

