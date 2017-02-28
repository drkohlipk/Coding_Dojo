#include <map>
#include <string>
#include <utility>
#include <iostream>
#include <vector>

std::map<std::string, float> getMaxMinAvg(std::vector<int> arr);

std::map<std::string, float> maxMinAvg;
std::vector<int> inpArr;

int main(int argc, char const *argv[])
{
	inpArr.push_back(5);
	inpArr.push_back(8);
	inpArr.push_back(2);
	inpArr.push_back(14);
	inpArr.push_back(25);
	inpArr.push_back(9);

	getMaxMinAvg(inpArr);

	return 0;
}

std::map<std::string, float> getMaxMinAvg(std::vector<int> arr)
{
	maxMinAvg.insert(std::make_pair("Max", (float) arr[0]));
	maxMinAvg.insert(std::make_pair("Min", (float) arr[0]));
	maxMinAvg.insert(std::make_pair("Avg", (float) arr[0]));

	int n = arr.size(), i;

	for (i = 1; i < n; i++)
	{
		if (arr[i] > maxMinAvg["Max"])
		{
			maxMinAvg["Max"] = arr[i];
		}
		if (arr[i] < maxMinAvg["Min"])
		{
			maxMinAvg["Min"] = arr[i];
		}
		maxMinAvg["Avg"] += arr[i];
	}

	maxMinAvg["Avg"] /= (float)n;



	for (std::map<std::string, float>::iterator it = maxMinAvg.begin(); it != maxMinAvg.end(); it++)
	{
		std::cout << it -> first << ": " << it -> second << std::endl;
	}

	return maxMinAvg;
}
