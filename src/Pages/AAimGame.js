import React, { useState } from 'react';

const PointGame = () => {
  const [points, setPoints] = useState([{ x: 150, y: 150 }]);

  // Функция для генерации случайных координат в пределах поля
  const getRandomPosition = () => {
    const x = Math.floor(Math.random() * 390); // Ширина поля (400px - размер точки 10px)
    const y = Math.floor(Math.random() * 390); // Высота поля (400px - размер точки 10px)
    return { x, y };
  };

  // Обработчик клика по точке
  const handleClick = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const tolerance = 5; // Радиус, с которым можно попасть по центру точки
    const newPoints = [...points];

    // Проверяем, попали ли в центр одной из существующих точек
    for (let i = 0; i < points.length; i++) {
      const point = points[i];
      const pointCenterX = point.x + 5; // Центр точки по оси X (5px = половина ширины точки)
      const pointCenterY = point.y + 5; // Центр точки по оси Y (5px = половина высоты точки)

      // Проверяем, что клик попал в центр точки
      if (
        Math.abs(offsetX - pointCenterX) < tolerance &&
        Math.abs(offsetY - pointCenterY) < tolerance
      ) {
        // Удаляем старую точку и добавляем новую
        newPoints.splice(i, 1, getRandomPosition()); // Заменяем старую точку на новую
        setPoints(newPoints);
        break; // Прерываем цикл после нахождения точки
      }
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Полная высота экрана
      }}
    >
      <div
        style={{
          width: '400px',
          height: '400px',
          border: '1px solid black',
          position: 'relative',
        }}
        onClick={handleClick}
      >
        {points.map((point, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: point.y,
              left: point.x,
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: 'red',
              cursor: 'pointer',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PointGame;
