import os
import json
import cmd

class BBShell(cmd.Cmd):
	intro = "Welcome the Browser Bandit Framework!"
	prompt = "$BBShell "
	
	def do_ls(self, line):
		"""
		ls
		Description: Displays files in current folder
		"""
		print(os.listdir(os.getcwd()))
	
	def do_cmdupdate(self, line):
		"""
		cmdupdate [file_path] [ip] [command]
		Description: Updates configuration file
		NOTE: To apply to all bots use 'all' instead of ip address
		"""
		file_path, ip, command = line.split()
		f = open(file_path, 'r')
		data = json.loads(f.read())
		f.close()
		data.update({
			ip:{
				"command": command
			}
		})
		f = open(file_path, 'w')
		f.write(json.dumps(data, indent=4))
		f.close()
		
	def do_cmdclear(self, file_path):
		"""
		cmdclear [file_path]
		Description: Clears all configs
		"""
		f = open(file_path, 'w')
		f.write(json.dumps({}, indent=4))
		f.close()
	
	def do_cat(self, file_path):
		"""
		cat [file_path]
		Description: Prints output of file to console
		"""
		f = open(file_path, 'r')
		print(f.read())
		f.close()
	
	def do_echo(self, string):
		"""
		echo
		Description: Print text to console
		"""
		print(string)
    
	def do_exit(self, line):
		"""
		exit
		Description: Exit the console
		"""
		return True

if __name__ == '__main__':
	BBShell().cmdloop()