/*********************************************************
* PokémonMillennium Commands
* Original written by Kenny00 
* Review by DeederVel
* Vers: 1.0 24/07/2015
*********************************************************/

var commands = exports.commands = {	 
	show: function (target, room, user) {
        if (!this.can('lock')) return;
        delete user.getIdentity
        user.hiding = false;
        user.updateIdentity();
        this.sendReply('You have revealed your staff symbol.');
        return false;
	},

	hide: function (target, room, user) {
		// add support for away
		if (!this.can('lock')) return;
		user.getIdentity = function () {
			var name = this.name + (this.away ? " - Ⓐⓦⓐⓨ" : "");
			if (this.locked) return '‽' + name;
			if (this.muted) return '!' + name;
			return ' ' + name;
		};
		user.hiding = true;
		user.updateIdentity();
		this.sendReply('You have hidden your staff symbol.');
	},
	
	flogout: 'forcelogout',
	forcelogout: function(target, room, user) {
		if(!user.can('hotpatch')) return;
		if (!this.canTalk()) return false;

		if (!target) return this.sendReply('/forcelogout [username], [reason] OR /flogout [username], [reason] - You do not have to add a reason');

		target = this.splitTarget(target);
		var targetUser = this.targetUser;

		if (!targetUser) {
			return this.sendReply('User '+this.targetUsername+' not found.');
		}

		if (targetUser == 'kenny00') return this.sendReply('You cannot force logout Console Admin.');

		this.addModCommand(''+targetUser.name+' was forcibly logged out by '+user.name+'.' + (target ? " (" + target + ")" : ""));

		this.logModCommand(user.name+' forcibly logged out '+targetUser.name);

		targetUser.resetName();
	},
	
	masspm: 'pmall',
	pmall: function (target, room, user) {
		if (!this.can('hotpatch')) return;
		if (!target) return this.parse('Il formato giusto è /pmall testo');

		var pmName = '~Server PM';

		for (var i in Users.users) {
			var message = '|pm|' + pmName + '|' + Users.users[i].getIdentity() + '|' + target;
			Users.users[i].send(message);
		}
	},
    	
    pas: 'pmallstaff',
	pmallstaff: function(target, room, user) {
		if (!target) return this.sendReply('/pmallstaff [message] - Sends a PM to every user in a room.');
		if (!this.can('hotpatch')) return false;
		for (var u in Users.users) { if (Users.users[u].isStaff) {
		Users.users[u].send('|pm|~Staff PM|'+Users.users[u].group+Users.users[u].name+'|'+target+' (by: '+user.name+')'); } 
		}
	},
	
	stafflist : function (target, room, user, connection) {
		var rankLists = {};
		for (var userid in Users.usergroups) {
			var group = Users.usergroups[userid].substr(0,1);
			if (!rankLists[group]) rankLists[group] = [];
			rankLists[group].push(userid);
		}

		var buffer = [];
		Object.keys(rankLists).sort(function (a, b) {
			return Config.groups[b].rank - Config.groups[a].rank;
		}).forEach(function (r) {
			buffer.push(Config.groups[r].name + "s (" + r + "):\n" + rankLists[r].sort().join(", "));
		});

		if (!buffer.length) return this.sendReply("This server has no staff.");
		connection.popup( buffer.join("\n\n") );
	},
	
	/*
	THIS COMMAND IS NOW UNNECESSARY SINCE THERE IS /stafflist
	
	staffpm: function (target, room, user) {
		this.sendReplyBox(
			'<b>Administrators (~):</b><br>' +
			'Based Revo = Revo<br>' +
			'DeederVel = DeederVel<br>' +
			'Jaeck = Jack<br>' +
			'Kiyro = Kiyro<br>' +
			'Manuelpm = Manuel<br>' +
			'quiksilverpm = QuikSilver<br>' +
			'<br><b>Leaders (&):</b><br>' +
			'FireBlast_t = FireBlast.<br>' +
			'Wondrfg = Wonder<br>' +
			'<br><b>Moderators (@):</b><br>' +
			'FallenPM = Fallen<br>' +
			'h_hyper = Hyper<br>' +
			'P0keman_n = Pokeman<br>' +
			'Superyle99 = Superyle99<br>' +
			'<br><b>Drivers (%):</b><br>' +
			'RenNegade = Ren<br>' +
			'Kenny00 = Ken<br>' +
			'Porro88 = Porro88<br>' +
			'Blue95 = Blue95<br>' +
			'Dastinato = Cydonia<br>' +
			'PeetaPM = Hexial<br>' +
			'ScarletSnowPM = ScarletSnow<br>'			
		);
	},*/
	
	calendario: function (target, room, user) {
		this.sendReplyBox(
			'<b>Lunedì</b><br>' +
			'ORAS OU<br><br>' +
			'<b>Martedì</b><br>' +
			'VGC \'15<br><br>' +
			'<b>Mercoledì</b><br>' +
			'ORAS OU<br><br>' +
			'<b>Giovedì</b><br>' +
			'VGC \'15<br><br>' +
			'<b>Venerdì</b><br>' +
			'ORAS Uber<br><br>' +
			'<b>Sabato</b><br>' +
			'ORAS UU<br><br>' +
			'<b>Domenica</b><br>' +
			'Single Random Battle<br>'
			
		);
	},
	
	superkick: function (target, room, user) {
        if (!target) return;
		target = this.splitTarget(target);
		var targetUser = this.targetUser;
		if (!targetUser || !targetUser.connected) {
			return this.sendReply("User " + this.targetUsername + " not found.");
		}
		if (!this.can('ban')) return false;
		var msg = "kicked by " + user.name + (target ? " (" + target + ")" : "") + ".";
		this.addModCommand("" + targetUser.name + " was " + msg);
		targetUser.popup("You have been " + msg);
		targetUser.leaveRoom(room);
	},
	
	spop: 'sendpopup',
	sendpopup: function(target, room, user) {
		if (!this.can('popup')) return false;

		target = this.splitTarget(target);
		var targetUser = this.targetUser;

		if (!targetUser) return this.sendReply('/sendpopup [user], [message] - You missed the user');
		if (!target) return this.sendReply('/sendpopup [user], [message] - You missed the message');

		targetUser.popup(target);
		this.sendReply(targetUser.name + ' got the message as popup: ' + target);

		targetUser.send(user.name+' sent a popup message to you.');

		this.logModCommand(user.name+' send a popup message to '+targetUser.name);
	},

	roomlist: function(target, room, user, connection) {
		if (!user.can('hotpatch')) return false;
		for (var u in Rooms.rooms) {
			if (Rooms.rooms[u].type === "chat") {
				if (!Rooms.rooms[u].active && !Rooms.rooms[u].isPrivate) {
					connection.sendTo(room.id, '|raw|INACTIVE: <font color=red><b>'+u+'</b></font>');
				}
				if (Rooms.rooms[u].isPrivate && Rooms.rooms[u].active) {
					connection.sendTo(room.id, '|raw|PRIVATE: <b>'+u+'</b>');
				}
				if (!Rooms.rooms[u].active && Rooms.rooms[u].isPrivate) {
					connection.sendTo(room.id, '|raw|INACTIVE and PRIVATE: <font color=red><b>'+u+'</font></b>');
				}
				if (Rooms.rooms[u].active && !Rooms.rooms[u].isPrivate) {
					connection.sendTo(room.id, '|raw|<font color=green>'+u+'</font>');
				}
			}
		}
	},
	
	namelock: 'nl',
	nl: function(target, room, user) {
		if (!this.can('ban')) return false;
		target = this.splitTarget(target);
		targetUser = this.targetUser;
		if (!targetUser) {
			return this.sendReply('/namelock - Lock a user into a username.');
		}
		if (targetUser.namelock === true) {
			return this.sendReply("The user "+targetUser+" is already namelocked.");
		}
		targetUser.namelock = true;
		return this.sendReply("The user "+targetUser+" is now namelocked.");
	},
	
	unnamelock: 'unl',
	unl: function(target, room, user) {
		if (!this.can('ban')) return false;
		target = this.splitTarget(target);
		targetUser = this.targetUser;
		if (!targetUser) {
			return this.sendReply('/unnamelock - Unlock a user from a username.');
		}
		if (targetUser.namelock === false) {
			return this.sendReply("The user "+targetUser+" is already un-namelocked.");
		}
		targetUser.namelock = false;
		return this.sendReply("The user "+targetUser+" is now un-namelocked.");
	},
	
	thisisaprotest: function (target, room, user) {
		this.sendReplyBox(
			"Il tuo gruppo:@" + user.group + "@#" + typeof(user.group) + "#"			
		);
	}

};
