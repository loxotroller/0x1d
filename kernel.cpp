#include <iostream>
#include <cstdlib>
#include <fstream>
#include <vector>
using namespace std;

const char* config = "./conf/modules.json";
const char* token = "./conf/token.json";

bool chkconf(){
	ifstream tok(token);
	if(!tok){
		cout<<"No token found, launch cancelled.\n";
		return false;
	}
	ifstream modules(config);
	if(!modules){
		cout<<"No config file found, generating...\n";
		system("ls ./modules > modules.conf");

		ifstream temp("./modules.conf");
		if(!temp) return -1;
		vector<string> files;
		string i;
		while(!temp.eof()){
			string tmp;
			getline(temp, tmp);
			if(tmp.find('.')==string::npos) continue;
			files.push_back(tmp);
		}
		temp.close();

		ofstream realconf(config);
		realconf<<"{\n";
		realconf<<"\"lib\": [";
		for(vector<string>::const_iterator i=files.begin();i<files.end();i++){
			realconf<<'\"'<<*i<<'\"';
			if(i+1 != files.end()) realconf<<", ";
		}
		realconf<<"], \n";
		realconf<<"\"name\": [";
		for(vector<string>::const_iterator i=files.begin();i<files.end();i++){
			realconf<<"[\""<<(*i).substr(0, (*i).find('.'))<<"\"]";
			if(i+1 != files.end()) realconf<<", ";
		}
		realconf<<"], \n";
		realconf<<"\"prefix\": \">>\"\n";
		realconf<<"}";
		realconf.close();

		system("rm ./modules.conf");
    }
    cout<<"Configs OK.\n";
	return true;
}

int main(){
	cout<<"Kernel started.\n";
	cout<<"Checking for configs...\n";
	if(!chkconf()){
		return 0;
	}
	cout<<"Startint the bot...\n";
	system("node init.js");
	return 0;
}
