
'use strict';

let color = require('../config/color');

exports.parseEmoticons = parseEmoticons;

let emotes = {
	'#freewolf': 'http://i.imgur.com/ybxWXiG.png',
	'4Head': 'https://static-cdn.jtvnw.net/emoticons/v1/354/1.0',
	'DansGame': 'https://static-cdn.jtvnw.net/emoticons/v1/33/1.0',
	'Doge': 'http://fc01.deviantart.net/fs71/f/2014/279/4/5/doge__by_honeybunny135-d81wk54.png',
	'EleGiggle': 'https://static-cdn.jtvnw.net/emoticons/v1/4339/2.0',
	'FacePalm': 'http://i.imgur.com/lv3GmpM.png',
	'FailFish': 'https://static-cdn.jtvnw.net/emoticons/v1/360/1.0',
	'feelsackbr': 'http://i.imgur.com/fgcP0wA.png', 
	'feelsbebop': 'http://i.imgur.com/TDwC3wL.png',
	'feelsbd': 'http://i.imgur.com/VDua55I.png', 
	'feelsbm': 'http://i.imgur.com/xwfJb2z.png',
	'feelsbn': 'http://i.imgur.com/wp51rIg.png',
	'feelsbt': 'http://i.imgur.com/rghiV9b.png',
	'feelscrazy': 'http://i.imgur.com/NiJsT5W.png',
	'feelscool': 'http://i.imgur.com/sq8dDT9.png', 
	'feelscri': 'http://i.imgur.com/e11Yxlk.png', 
	'feelscx': 'http://i.imgur.com/zRSUw2n.gif',
	'feelsdd': 'http://i.imgur.com/ccwdkjp.png', 
	'feelsdoge': 'http://i.imgur.com/GklYWvi.png',
	'feelsemo': 'http://i.imgur.com/8sbGVmY.png', 
	'feelsfdra': 'http://i.imgur.com/ZIcl9Zy.jpg',
	'feelsgay': 'http://i.imgur.com/xRKEaJD.png',
	'feelsgd': 'http://i.imgur.com/1DRBL2A.png', 
	'feelsgn': 'http://i.imgur.com/2UzQxP5.png',
	'feelsgro': 'http://i.imgur.com/zwryQzu.png',
	'feelshp': 'http://i.imgur.com/0jjrLa6.png',
	'feelsho': 'http://i.imgur.com/J4oUHm2.png?1',
	'feelsilum': 'http://i.imgur.com/CnyGTTD.png',
	'feelsjpn': 'http://i.imgur.com/Zz2WrQf.jpg',
	'feelskawaii': 'http://i.imgur.com/NMRUvWr.png',
	'feelsky': 'http://i.imgur.com/BtATPId.png?1',
	'feelslelouch': 'http://i.imgur.com/qZrV75o.png',
	'feelslot': 'http://i.imgur.com/lewWAsf.png',
	'feelslu': 'http://i.imgur.com/REEBSOT.png?1',
	'feelsmd': 'http://i.imgur.com/e8m0OyH.png',
	'feelsmixtape': 'http://i.imgur.com/7lncwng.png',
	'feelsnv': 'http://i.imgur.com/XF6kIdJ.png',
	'feelsns': 'http://i.imgur.com/jYRFUYW.jpg?1',
	'feelsok': 'http://i.imgur.com/u19a6tL.png',
	'feelsshrk': 'http://i.imgur.com/eQ2DkCx.png',
	'feelspika': 'http://i.imgur.com/UyWNWhe.png',
	'feelsPika': 'http://i.imgur.com/rldrboq.png',
	'feelspink': 'http://i.imgur.com/lyHo6LH.png',
	'feelspn': 'http://i.imgur.com/wSSM6Zk.png',
	'feelspoli': 'http://i.imgur.com/FnzhrWa.jpg?1',
	'feelsPoli': 'http://i.imgur.com/y5NKZ1p.png',
	'feelsrb': 'http://i.imgur.com/00SiUCJ.png',
	'feelsrg': 'http://i.imgur.com/DsRQCsI.png',
	'feelsrs': 'http://i.imgur.com/XlP4UTN.png',
	'feelssc': 'http://i.imgur.com/pkfo3IK.png',
	'feelsseis': 'http://i.imgur.com/ZuDO6Kq.png',
	'feelsshi': 'http://i.imgur.com/VzlGZ1M.jpg',
	'feelsslo': 'http://i.imgur.com/iQuToJf.jpg?1',
	'feelssnail': 'http://i.imgur.com/wf2ajCR.jpg',
	'feelssnake': 'http://i.imgur.com/xoJnDUD.png',
	'feelssteel': 'http://orig02.deviantart.net/56f7/f/2011/179/5/f/scizor_lickie_by_boyofftheting-d3kd3fk.gif',
	'feelstea': 'http://i.imgur.com/M0f2zgJ.jpg?1',
	'feelstired': 'http://i.imgur.com/5cNndoa.png',
	'feelsdrg': 'http://i.imgur.com/rHqTuu7.png',
	'feelsvpn': 'http://i.imgur.com/ODTZISl.gif',
	'feelswin': 'http://i.imgur.com/rbs9pZG.png?1',
	'funnylol': 'http://i.imgur.com/SlzCghq.png',
	'gudone': 'http://i.imgur.com/USkp1b9.png',
	'happyface': 'http://imgur.com/krzCL3j.jpg',
	'hmmface': 'http://i.imgur.com/Z5lOwfZ.png',
	'hypnotoad': 'http://i.imgur.com/lJtbSfl.gif',
	'jcena': 'http://i.imgur.com/hPz30Ol.jpg?2',
	'Kappa': 'http://i.imgur.com/ZxRU4z3.png?1',
	'Kreygasm': 'https://static-cdn.jtvnw.net/emoticons/v1/41/1.0',
	'meGusta': 'http://cdn.overclock.net/3/36/50x50px-ZC-369517fd_me-gusta-me-gusta-s.png',
	'MingLee': 'https://static-cdn.jtvnw.net/emoticons/v1/68856/2.0',
	'noface': 'http://i.imgur.com/H744eRE.png',
	'Obama': 'http://i.imgur.com/rBA9M7A.png',
	'oshet': 'http://i.imgur.com/yr5DjuZ.png',
	'PeoplesChamp': 'http://i.imgur.com/QMiMBKe.png',
	'Sanic': 'http://i.imgur.com/Y6etmna.png',
	'stevo': 'http://imgur.com/Gid6Zjy.png',
	'thumbsup': 'http://i.imgur.com/rQy0iie.png',
	'trollface': 'http://cdn.overclock.net/a/a0/50x50px-ZC-a0e3f9a7_troll-troll-face.png',
	'trumpW': 'https://static-cdn.jtvnw.net/emoticons/v1/35218/1.0',
	'wtfman': 'http://i.imgur.com/kwR8Re9.png',
	'WutFace': 'https://static-cdn.jtvnw.net/emoticons/v1/28087/2.0',
	'xaa': 'http://i.imgur.com/V728AvL.png',
	'xoxo': 'http://orig00.deviantart.net/b49d/f/2014/220/5/3/ichigo_not_impressed_icon_by_magical_icon-d7u92zg.png',
	'yayface': 'http://i.imgur.com/anY1jf8.png',
	'yesface': 'http://i.imgur.com/k9YCF6K.png',
	'youdontsay': 'http://r32.imgfast.net/users/3215/23/26/64/smiles/280467785.jpg',
	'feelsbt': 'http://i.imgur.com/BRnpPBo.jpg',
	'feelssorai': 'http://i.imgur.com/wkeFiN0.gif',
	'feelsmaw': 'http://i.imgur.com/FEpVEG4.gif',
	'feelsflyhn': 'http://i.imgur.com/xDRGxwq.gif',
	'feelsomega': 'http://i.imgur.com/NqnVzj9.gif',
	'feelszoro': 'http://i.imgur.com/iAdbqOO.gif',
	'feelsray': 'http://i.imgur.com/VloLxM7.gif',
	'feelsweav': 'http://i.imgur.com/dKYFaof.gif',
	'feelsskye': 'http://i.imgur.com/muzJ2O7.gif',
	'feelswar': 'http://i.imgur.com/r13CCLn.gif',
	'feelsdra': 'http://i.imgur.com/dJ6fIW7.gif',
	'feelsjolt': 'http://i.imgur.com/YSqodQq.gif',
	'feelsnair': 'http://i.imgur.com/BdiMvPv.gif',
	'feelscyn': 'http://i.imgur.com/OY3Jogg.gif',
	'feelsitachi': 'http://i.imgur.com/8gLEG3O.gif',
	'feelspotato': 'http://i.imgur.com/iC5PGJq.gif',
	'feelstina': 'http://i.imgur.com/Z3P23Ag.jpg',
	'feelshayley': 'http://i.imgur.com/XNpKuJM.gif',
	'feelsswi': 'http://i.imgur.com/QgVikmo.gif',
	'llamacool': 'http://i.imgur.com/X1x3728.gif',
	'llamafood': 'http://i.imgur.com/SUZkz5p.gif',
	'llamatea': 'http://i.imgur.com/nJnakEU.gif',
	'llamaywn': 'http://i.imgur.com/SVj8kBt.gif',
	'llamawave': 'http://i.imgur.com/KWAQbPu.gif',
};

let emotesKeys = Object.keys(emotes);
let patterns = [];
let metachars = /[[\]{}()*+?.\\|^$\-,&#\s]/g;

for (let i in emotes) {
	if (emotes.hasOwnProperty(i)) {
		patterns.push('(' + i.replace(metachars, '\\$&') + ')');
	}
}
let patternRegex = new RegExp(patterns.join('|'), 'g');

/**
 * Parse emoticons in message.
 *
 * @param {String} message
 * @param {Object} room
 * @param {Object} user
 * @param {Boolean} pm - returns a string if it is in private messages
 * @returns {Boolean|String}
 */
function parseEmoticons(message, room, user, pm) {
	if (typeof message !== 'string' || (!pm && room.disableEmoticons)) return false;

	let match = false;
	let len = emotesKeys.length;


	while (len--) {
		if (message && message.indexOf(emotesKeys[len]) >= 0) {
			match = true;
			break;
		}
	}

	if (!match) return false;

	// escape HTML
	message = Tools.escapeHTML(message);

	// add emotes
	message = message.replace(patternRegex, function (match) {
		let emote = emotes[match];
		return typeof emote === 'string' ? '<img src="' + emote + '" title="' + match + '" height="50" width="50" />' : match;
	});

	// __italics__
	message = message.replace(/\_\_([^< ](?:[^<]*?[^< ])?)\_\_(?![^<]*?<\/a)/g, '<i>$1</i>');

	// **bold**
	message = message.replace(/\*\*([^< ](?:[^<]*?[^< ])?)\*\*/g, '<b>$1</b>');

	let group = user.getIdentity().charAt(0);
	if (room.auth) group = room.auth[user.userid] || group;

	let style = "background:none;border:0;padding:0 5px 0 0;font-family:Verdana,Helvetica,Arial,sans-serif;font-size:9pt;cursor:pointer";

	message = "<div class='chat'>" + "<small>" + group + "</small>" + "<button name='parseCommand' value='/user " + user.name + "' style='" + style + "'>" + "<b><font color='" + color(user.userid) + "'>" + user.name + ":</font></b>" + "</button><em class='mine'>" + message + "</em></div>";
	if (pm) return message;

	room.addRaw(message);

	return true;
}

/**
 * Create a two column table listing emoticons.
 *
 * @return {String} emotes table
 */
function create_table() {
	let emotes_name = Object.keys(emotes);
	let emotes_list = [];
	let emotes_group_list = [];
	let len = emotes_name.length;
	let i;

	for (i = 0; i < len; i++) {
		emotes_list.push("<td>" +
			"<img src='" + emotes[emotes_name[i]] + "'' title='" + emotes_name[i] + "' height='50' width='50' />" +
			emotes_name[i] + "</td>");
	}

	let emotes_list_right = emotes_list.splice(len / 2, len / 2);

	for (i = 0; i < len / 2; i++) {
		let emote1 = emotes_list[i],
			emote2 = emotes_list_right[i];
		if (emote2) {
			emotes_group_list.push("<tr>" + emote1 + emote2 + "</tr>");
		} else {
			emotes_group_list.push("<tr>" + emote1 + "</tr>");
		}
	}

	return "<div class='infobox'><center><b><u>List of Emoticons</u></b></center>" + "<div class='infobox-limited'><table border='1' cellspacing='0' cellpadding='5' width='100%'>" + "<tbody>" + emotes_group_list.join("") + "</tbody>" + "</table></div></div>";
}

let emotes_table = create_table();

exports.commands = {
	blockemote: 'blockemoticons',
	blockemotes: 'blockemoticons',
	blockemoticon: 'blockemoticons',
	blockemoticons: function (target, room, user) {
		if (user.blockEmoticons === (target || true)) return this.sendReply("You are already blocking emoticons in private messages! To unblock, use /unblockemoticons");
		user.blockEmoticons = true;
		return this.sendReply("You are now blocking emoticons in private messages.");
	},
	blockemoticonshelp: ["/blockemoticons - Blocks emoticons in private messages. Unblock them with /unblockemoticons."],

	unblockemote: 'unblockemoticons',
	unblockemotes: 'unblockemoticons',
	unblockemoticon: 'unblockemoticons',
	unblockemoticons: function (target, room, user) {
		if (!user.blockEmoticons) return this.sendReply("You are not blocking emoticons in private messages! To block, use /blockemoticons");
		user.blockEmoticons = false;
		return this.sendReply("You are no longer blocking emoticons in private messages.");
	},
	unblockemoticonshelp: ["/unblockemoticons - Unblocks emoticons in private messages. Block them with /blockemoticons."],

	emotes: 'emoticons',
	emoticons: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReply("|raw|" + emotes_table);
	},
	emoticonshelp: ["/emoticons - Get a list of emoticons."],

	toggleemote: 'toggleemoticons',
	toggleemotes: 'toggleemoticons',
	toggleemoticons: function (target, room, user) {
		if (!this.can('declare', null, room)) return false;
		room.disableEmoticons = !room.disableEmoticons;
		this.sendReply("Disallowing emoticons is set to " + room.disableEmoticons + " in this room.");
		if (room.disableEmoticons) {
			this.add("|raw|<div class=\"broadcast-red\"><b>Emoticons are disabled!</b><br />Emoticons will not work.</div>");
		} else {
			this.add("|raw|<div class=\"broadcast-blue\"><b>Emoticons are enabled!</b><br />Emoticons will work now.</div>");
		}
	},
	toggleemoticonshelp: ["/toggleemoticons - Toggle emoticons on or off."],

	rande: 'randemote',
	randemote: function (target, room, user) {
		if (!this.canBroadcast()) return;
		let rng = Math.floor(Math.random() * emotesKeys.length);
		let randomEmote = emotesKeys[rng];
		this.sendReplyBox("<img src='" + emotes[randomEmote] + "' title='" + randomEmote + "' height='50' width='50' />");
	},
	randemotehelp: ["/randemote - Get a random emote."],
};
