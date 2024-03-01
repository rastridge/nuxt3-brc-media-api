# Media API for thebuffalorugby.club

File uploads based on

```
https://www.bezkoder.com/node-js-express-file-upload/
```

## Hosted at Dreamhost.com

```
https://panel.dreamhost.com/
```

Websites/Manage Websites
Domain name - media.buffalorugby.org

Passenger wont function after March 31, 2024
Instead
Configure a Proxy Server
```
https://help.dreamhost.com/hc/en-us/articles/23628302213652-How-to-upgrade-to-a-VPS-and-use-a-Proxy-Server
```
```
https://help.dreamhost.com/hc/en-us/articles/217955787-Proxy-Server
```


Initialize Passenger to run JS server

```
Websites / Manage Websites  / Additional settings / Web Options / Modify / Enable Passenger / Enable NodeJS
```

media.buffalorugby.org must have .htaccess which includes
''`
PassengerFriendlyErrorPages on

Upload server code to media.buffalorugby.org

```
rsync -av  --delete  --exclude ".well-known/acme-challenge" --exclude "combined.log" --exclude "error.log" --exclude "/logs" --exclude "/tmp"  --exclude "/public" --exclude ".htaccess" --exclude ".DS_Store" --exclude "_notes"  --exclude ".git"  --exclude ".vscode"   ~/Code/experiments-nuxt3/nuxt3-brc-media-api/ rastridge@buffalorugby.org:/home/rastridge/media.buffalorugby.org/
```

Shell access to media.buffalorugby.org

```
ssh rastridge@vps30249.dreamhostps.com
```

Restart server

```
touch /home/rastridge/media.buffalorugby.org/tmp/restart.txt'
```
