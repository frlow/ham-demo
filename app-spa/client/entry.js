const key = 'override-app-spa'
if (localStorage[key]) import(/* @vite-ignore */ localStorage[key])
else import('./main')
