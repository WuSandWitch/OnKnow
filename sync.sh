echo "Sync started at $(date)" >> sync.log
npm run sync-notes
npx quartz sync
echo "Sync & Deplay Completed at $(date)" >> sync.log
echo "url: https://wusandwitch.zudo.cc/OnKnow"