echo "Sync started at $(date)" >> sync.log
npm run sync-notes
npx quartz sync
echo "Sync Completed at $(date)" >> sync.log
echo "url: https://onknow.zudo.cc"