using System;
using Enemies;

namespace Humans
{
	public class Human
    {
        public string name;
        public int health{ get; set; }
        private int strength{ get; set; }
        protected int intelligence{ get; set; }
        private int dexterity{ get; set; }

        public Human(string nameI)
        {
            name = nameI;
            strength = 3;
            intelligence = 3;
            dexterity = 3;
            health = 100;
        }

        public Human(string nameI, int strengthI, int intelligenceI, int dexterityI, int healthI)
        {
            name = nameI;
            strength = strengthI;
            intelligence = intelligenceI;
            dexterity = dexterityI;
            health = healthI;
        }

        public void Attack(Enemy otherGuy, int detract)
        {
            detract = (detract == 0) ? (5 * strength) : (detract);
			otherGuy.health -= detract;
        }

    }

    public class Ninja : Human
    {
        public Ninja(string name) : base(name, 3, 3, 175, 100)
        {

        }

        public void Steal(Enemy attacked)
        {
            base.Attack(attacked, 0);
            health += 10;
        }

        public void GetAway()
        {
            health -= 15;
        }
    }

    public class Wizard : Human
    {
        public Wizard(string name) : base(name, 3, 25, 3, 50)
        {

        }

        public void Heal()
        {
            health += 10 * intelligence;
        }

        public void Fireball(Enemy attacked)
        {
            Random rnd = new Random();
            int fire = rnd.Next(20, 51);
            base.Attack(attacked, fire);
        }
    }

    public class Samurai : Human
    {
        public Samurai(string name) : base(name, 3, 3, 3, 200)
        {
			
        }

        public void DeathBlow(Enemy attacked)
        {
			if (attacked.health < 50) {
				attacked.health = 0;
			}
        }

        public void Meditate()
        {
            health = 200;
        }
    }
}