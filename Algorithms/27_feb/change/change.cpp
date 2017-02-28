#include <map>
#include <string>
#include <utility>
#include <iostream>
#include <vector>

using namespace std;

map<string, int> make_change(int value)
{
	vector<int> coins;
	coins.push_back(25);
	coins.push_back(10);
	coins.push_back(5);
	coins.push_back(1);

	map<string, int> change;

	for (int i = 0; i < coins.size(); i++)
	{
		if (value <= 0) break;
		int diff = value / coins[i];
		if (diff >= 1)
		{
			switch (coins[i])
			{
				case 25:
					change.insert(make_pair("quarter", diff));
					break;
				case 10:
					change.insert(make_pair("dime", diff));
					break;
				case 5:
					change.insert(make_pair("nickel", diff));
					break;
				case 1:
					change.insert(make_pair("penny", diff));
					break;
			}
			value -= diff * coins[i];
		}
	}

	for (map<string,int>::iterator it = change.begin(); it != change.end(); ++it)
	{
		cout << it -> first << ": " << it -> second << endl;
	}

	return change;
}

int main(int argc, char const *argv[])
{
	make_change(94);
	return 0;
}
