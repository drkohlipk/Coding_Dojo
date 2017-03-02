#include <utility>
#include <string>
#include <map>
#include <iostream>

std::map<std::string, std::string> invertHash(std::map<std::string, std::string> mapToInv);

int main(int argc, char const *argv[])
{
	std::map<std::string, std::string> inpMap;
	inpMap.insert(std::make_pair("name", "Zaphod"));
	inpMap.insert(std::make_pair("charm", "high"));
	inpMap.insert(std::make_pair("morals", "dicey"));

	invertHash(inpMap);

	return 0;
}

std::map<std::string, std::string> invertHash(std::map<std::string, std::string> mapToInv)
{
	std::map<std::string, std::string> resMap;

	for(std::map<std::string, std::string>::iterator it = mapToInv.begin(); it != mapToInv.end(); it++)
	{
		resMap.insert(std::make_pair(it -> second, it -> first));
	}

	for(std::map<std::string, std::string>::iterator it2 = resMap.begin(); it2 != resMap.end(); it2++)
	{
		std::cout << it2 -> first << ": " << it2 -> second << std::endl;
	}

	return resMap;
}
