using System;
using Humans;
using Enemies;

namespace ConsoleApplication
{
    public class Program
    {
        public static void GamePlay(Ninja ninja, Samurai sam, Wizard wiz)
        {
            Console.Clear();
            Console.WriteLine("You and your party are walking through the forest when all of a sudden...");
            Console.WriteLine("\nPress the <enter> key to continue...");
            Console.ReadKey();
            Encounter(ninja, sam, wiz);
        }

        public static void Encounter(Ninja ninja, Samurai samurai, Wizard wizard)
        {
            Console.Clear();
            Console.WriteLine("You're attacked by 2 zombies and a giant spider!");
            Zombie zombie1 = new Zombie();
            Zombie zombie2 = new Zombie();
            Spider spider = new Spider();
            Console.WriteLine("\n***********************************************************************\n");
            Console.WriteLine($"You have the first move...who would you like to use?\n1. {ninja.name} (ninja)\n2. {samurai.name} (samurai)\n3. {wizard.name} (wizard)");
            ConsoleKeyInfo chart = Console.ReadKey();
            int charStr = int.Parse(chart.KeyChar.ToString());
            switch (charStr)
            {
                case 1:
                    Console.Clear();
                    Console.WriteLine($"Sweet, you chose your ninja {ninja.name}!");
                    Console.WriteLine("\n***********************************************************************\n");
                    Console.WriteLine("What move would you like to use?\n1. Steal\n2. Get Away");
                    ConsoleKeyInfo input1 = Console.ReadKey();
                    int inp1 = int.Parse(input1.KeyChar.ToString());
                    switch (inp1)
                    {
                        case 1:
                            ninja.Steal(zombie1);
                            ninja.Steal(zombie2);
                            ninja.Steal(spider);
                            Console.Clear();
                            Console.WriteLine($"Nice!!  Zombie1's health is {zombie1.health}, zombie2's health is {zombie2.health}, and the spider's health is {spider.health}!");
                            Console.WriteLine("\nPress the <enter> key to continue...");
                            Console.ReadKey();
                            break;
                        case 2:
                            ninja.GetAway();
                            Console.Clear();
                            Console.WriteLine($"Since you decided to make your ninja run away, his health is now {ninja.health}.");
                            Console.WriteLine("\nPress the <enter> key to continue...");
                            Console.ReadKey();
                            break;
                    }
                    break;
                case 2:
                    Console.Clear();
                    Console.WriteLine($"Awesome, you chose your samurai {samurai.name}!");
                    Console.WriteLine("\n***********************************************************************\n");
                    Console.WriteLine("What move would you like to use?\n1. Death Blow\n2. Meditate");
                    ConsoleKeyInfo input2 = Console.ReadKey();
                    int inp2 = int.Parse(input2.KeyChar.ToString());
                    switch (inp2)
                    {
                        case 1:
                            samurai.DeathBlow(zombie1);
                            samurai.DeathBlow(zombie2);
                            samurai.DeathBlow(spider);
                            Console.Clear();
                            Console.WriteLine($"Nice!!  Zombie1's health is {zombie1.health}, zombie2's health is {zombie2.health}, and the spider's health is {spider.health}!");
                            Console.WriteLine("\nPress the <enter> key to continue...");
                            Console.ReadKey();
                            break;
                        case 2:
                            samurai.Meditate();
                            Console.Clear();
                            Console.WriteLine($"Your samurai healed himself and his health is now {samurai.health}.");
                            Console.WriteLine("\nPress the <enter> key to continue...");
                            Console.ReadKey();
                            break;
                    }
                    break;
                case 3:
                    Console.Clear();
                    Console.WriteLine($"Dude, your wizard {wizard.name} is ready to go!");
                    Console.WriteLine("\n***********************************************************************\n");
                    Console.WriteLine("What move would you like to use?\n1. Fireball\n2. Heal Yourself");
                    ConsoleKeyInfo input3 = Console.ReadKey();
                    int inp3 = int.Parse(input3.KeyChar.ToString());
                    switch (inp3)
                    {
                        case 1:
                            wizard.Fireball(zombie1);
                            wizard.Fireball(zombie2);
                            wizard.Fireball(spider);
                            Console.Clear();
                            Console.WriteLine($"Nice!!  Zombie1's health is {zombie1.health}, zombie2's health is {zombie2.health}, and the spider's health is {spider.health}!");
                            Console.WriteLine("\nPress the <enter> key to continue...");
                            Console.ReadKey();
                            break;
                        case 2:
                            wizard.Heal();
                            Console.Clear();
                            Console.WriteLine($"Your wizard healed himself and his health is now {wizard.health}.");
                            Console.WriteLine("\nPress the <enter> key to continue...");
                            Console.ReadKey();
                            break;
                    }
                    break;
            }
        }

        // public static void HealthCheck(object fighter)
        // {
        //     if (fighter is )
        // }        

        public static void Main(string[] args)
        {
            Console.Clear();
            Console.WriteLine("Welcome to the Dungeon Nightmares RPG!  Press 'C' to meet your doom or 'X' to exit!");
            ConsoleKeyInfo key = Console.ReadKey();
            string let = key.Key.ToString();
            switch (let.ToLower())
            {
                case "c":
                    Console.Clear();
                    Console.WriteLine("You are a member of a band of nomads made up of a ninja, a samurai, and a wizard.");
                    Console.WriteLine("\nPress the <enter> key to continue...");
                    Console.ReadKey();
                    Console.Clear();
                    Console.Write("What would you like to name your Ninja? ");
                    string ninj = Console.ReadLine();
                    Ninja ninja1 = new Ninja(ninj);
                    Console.Write("What would you like to name your Samurai? ");
                    string sam = Console.ReadLine();
                    Samurai sam1 = new Samurai(sam);
                    Console.Write("What would you like to name your Wizard? ");
                    string wiz = Console.ReadLine();
                    Wizard wizard1 = new Wizard(wiz);
                    Console.Clear();
                    Console.WriteLine($"Your party is made up of a ninja named {ninj}, a samurai named {sam}, and a wizard named {wiz}");
                    Console.WriteLine("\nPress the <enter> key to continue...");
                    Console.ReadKey();
                    GamePlay(ninja1, sam1, wizard1);
                    break;
                case "x":
                    Console.Clear();
                    break;
            }
        }
    }
}
