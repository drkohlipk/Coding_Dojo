using System;

namespace ConsoleApplication
{
    public class Human
    {
        public string name;
        public int strength = 3,
            intelligence = 3,
            dexterity = 3,
            health = 100;

        public Human(string nameI)
        {
            name = nameI;
        }

        public Human(string nameI, int strengthI = 3, int intelligenceI = 3, int dexterityI = 3, int healthI = 100)
        {
            name = nameI;
            strength = strengthI;
            intelligence = intelligenceI;
            dexterity = dexterityI;
            health = healthI;
        }

        public object Attack(object otherGuy)
        {
            if (otherGuy is Human)
            {
                Human thisGuy = (Human)otherGuy;
                thisGuy.health -= (5 * strength);
            }
            else
            {
                Console.WriteLine("Dude, why are you just attacking random objects?");
            }

            return otherGuy;
        }

    }
    public class Program
    {
        public static void Main(string[] args)
        {
            Human human1 = new Human("Bob");
            Human human2 = new Human("Tim");
            Object object1 = new Object();
            Console.WriteLine("{0} has a health of {1}", human2.name, human2.health);
            human1.Attack(human2);
            Console.WriteLine("{0} has a health of {1}", human2.name, human2.health);
        }
    }
}
