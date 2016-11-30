using System;
using Humans;

namespace Enemies
{
	public class Enemy
	{
		public string enType;
		protected int strength;
		public int health;
		public Enemy(string kind, int strngth)
		{
			enType = kind;
			strength = strngth;
			health = 100;
		}

		public void Attack(Human attacked, int detract)
		{
			attacked.health -= detract * 5;
		}
	}

	public class Zombie : Enemy
	{
		public Zombie() : base("zombie", 2)
		{

		}

		public void EatBrains(Human attacked)
		{
			Random rnd = new Random();
			int num = rnd.Next(1,(strength * 10));
			base.Attack(attacked, num);
		}
	}

	public class Spider : Enemy
	{
		public Spider() : base("spider", 2)
		{

		}

		public void SpitVenom(Human attacked)
		{
			Random rnd = new Random();
			int num = rnd.Next(1,(strength * 5));
			base.Attack(attacked, num);
		}
	}
}