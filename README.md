For updating this website after each change
1️⃣ Delete build + cache completely
cd portfolio
Remove-Item -Recurse -Force dist
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json -Force
2️⃣ Reinstall everything fresh
npm install
3️⃣ Build fresh
npm run build
4️⃣ Copy fresh build to root
Copy-Item -Path .\dist\* -Destination ..\ -Recurse -Force
5️⃣ Commit and push
cd ..
git add .
git commit -m "Clean rebuild - fix ReactDOM"
git push origin main
