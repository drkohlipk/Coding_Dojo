#include <string>
#include <iostream>
#include <map>

int getLength(std::map<std::string, std::string> mapCount);
std::map<std::string, std::string> inpMap;

int main(int argc, char const *argv[])
{
	inpMap.insert(std::make_pair("band", "Travis Shredd & the Good Ol' Homeboys"));
	inpMap.insert(std::make_pair("style", "Country/Metal/Rap"));
	inpMap.insert(std::make_pair("album", "668: The Neighbor of the Beast"));

	std::cout << getLength(inpMap) << std::endl;
}

int getLength(std::map<std::string, std::string> mapCount)
{
	int count = 0;

	for (std::map<std::string, std::string>::iterator it = mapCount.begin(); it != mapCount.end(); it++)
	{
		count++;
	}

	return count;
}
