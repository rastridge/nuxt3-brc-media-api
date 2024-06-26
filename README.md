# Media API for buffalorugby.org

File uploads based on

```
https://www.bezkoder.com/node-js-express-file-upload/
```

## Javascript server hosted at Dreamhost.com

Domain name - media.buffalorugby.org
Using Proxy Server

## Preparation

```
https://panel.dreamhost.com/
```

Start proxy server

More / Proxy
Set url/to/proxy to 'api'

Set web directory to 'public'

Websites/Manage Websites / Manage / Additional setting / Paths

## Development Cycle

Edit server code

```
cd /Users/rastridge/code/experiments-nuxt3/nuxt3-brc-media-api/ vscode nuxt3-brc-media-api
```

To Upload server code to media.buffalorugby.org

```
rsync -av  --delete  --exclude ".well-known/acme-challenge" --exclude "combined.log" --exclude "error.log" --exclude "/logs" --exclude "/tmp"  --exclude "/public" --exclude ".htaccess" --exclude ".DS_Store" --exclude "_notes"  --exclude ".git"  --exclude ".vscode"   ~/Code/experiments-nuxt3/nuxt3-brc-media-api/ rastridge@buffalorugby.org:/home/rastridge/media.buffalorugby.org/
```

To Restart server

Shell access to media.buffalorugby.org

```
ssh rastridge@vps30249.dreamhostps.com
```

change to directory media.buffalorugby.org

```
cd /home/rastridge/media.buffalorugby.org
```

```
pm2 restart ecosystem.config.js
```

## Using media.buffalorugby.org

Uses Netlify DNS - A record points to domain media.buffalorugby.org

Upload server code from media.buffalorugby.org to media.buffalorugby.org
app.js starts on port 9006 - do NOT update, update node_modules with npm install

```
rsync -av --dry-run --delete --exclude "ecosystem.config.js" --exclude "app.js"  --exclude "/node_modules" --exclude ".git" --exclude ".gitignore" ~/code/experiments-nuxt3/nuxt3-brc-media-api/ rastridge@buffalorugby.org:/home/rastridge/media.buffalorugby.org/
```

```
rsync -av --delete --exclude "ecosystem.config.js" --exclude "app.js"  --exclude "/node_modules" --exclude ".git" --exclude ".gitignore" ~/Code/experiments-nuxt3/nuxt3-brc-media-api/ rastridge@buffalorugby.org:/home/rastridge/media.buffalorugby.org/

```
