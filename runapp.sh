export IP_ADDRESS="192.168.0.231"
export API_HOST="http://${IP_ADDRESS}:3010/"

docker-compose up -d --build

echo ""
echo "App run on: http://${IP_ADDRESS}:3011/"