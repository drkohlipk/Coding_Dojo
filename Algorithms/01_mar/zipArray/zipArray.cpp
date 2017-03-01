#include <iostream>
#include <utility>
#include <string>
#include <map>
#include <vector>

std::vector<std::string> firstArr;
std::vector<std::string> secondArr;
std::map<std::string, std::string> resMap;

std::map<std::string, std::string> zipArr(std::vector<std::string> arr1, std::vector<std::string> arr2);

int main(int argc, char const *argv[])
{
	firstArr.push_back("abc");
	firstArr.push_back("3");
	firstArr.push_back("yo");
	secondArr.push_back("42");
	secondArr.push_back("wassup");
	secondArr.push_back("true");

	zipArr(firstArr, secondArr);

	return 0;
}

std::map<std::string, std::string> zipArr(std::vector<std::string> arr1, std::vector<std::string> arr2)
{
	int n = (arr1.size() > arr2.size()) ? arr2.size() : arr1.size(), i;

	for (i = 0; i < n; i++)
	{
		resMap.insert(std::make_pair(arr1[i], arr2[i]));
	}

	for (std::map<std::string, std::string>::iterator it = resMap.begin(); it != resMap.end(); it++)
	{
		std::cout << it -> first << ": " << it -> second << std::endl;
	}

	return resMap;
}
