var fs = require('fs');
var selectors;
 
function writeIconCSS() {
        fs.appendFile('config/custom.css', selectors);
}
 
exports.commands = {
        icon: function (target, room, user) {
        if (!this.can('declare')) return this.errorReply("Access denied.");
 
                var args = target.split(',');
                if (args.length < 3) return this.parse('/help icon');
                var username = toId(args.shift());
                var image = 'background: rgba(242,247,250,.85) url("' + args.shift().trim() + '") right no-repeat;';
                selectors = '\n\n' + '  #' + toId(args.shift()) + '-userlist-user-' + username;
                args.forEach(function (room) {
                        selectors += ', #' + toId(room) + '-userlist-user-' + username;
                });
                selectors += ' { \n' + '    ' + image +  '\n  }';
 
                this.privateModCommand("(" + user.name + " has set an icon to " + username + ")");
                writeIconCSS();
        },
        iconhelp: ["/icon [username], [image], [room 1], [room 2], etc. - Sets an icon to a user in chosen rooms. Credits goes to Master Float in this."]
};
