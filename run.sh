echo "*****************************"
echo "* Building container image *"
echo "*****************************"
echo ""

docker build --build-arg VITE_MOCK_ENABLED=true -t card-game .

echo "*****************************"
echo "* Running card-game container on port 8085 *"
echo "*****************************"
echo ""

docker run -d -p 8085:80 --name card-game card-game

echo "*************************************"
echo "✅ Container is up and running, at http://localhost:8085"
echo "*************************************"
echo ""

if [ "$1" != "no-pause" ]; then
    read -p "Press any button to exit..."
fi
