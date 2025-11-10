import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // Tải bản slim cho nhẹ

// Component nền
function ParticlesBackground() {
  
  // Hàm này được gọi khi particles sẵn sàng
  const particlesInit = useCallback(async (engine) => {
    // Tải cấu hình 'slim'
    await loadSlim(engine);
  }, []);

  // Đây là cấu hình cho các hạt
  const options = {
    background: {
      color: {
        value: 'var(--color-dark-primary)', // Dùng màu nền đen của bạn
      },
    },
    fpsLimit: 60, // Giới hạn FPS để tối ưu
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse', // Hiệu ứng đẩy ra khi hover
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100, // Khoảng cách đẩy
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: 'var(--color-red-accent)', // Màu hạt là màu đỏ
      },
      links: {
        color: '#444', // Màu của đường nối (xám tối)
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce', // Đập và nảy lại ở viền
        },
        random: false,
        speed: 1, // Tốc độ di chuyển
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50, // Số lượng hạt
      },
      opacity: {
        value: 0.3, // Độ mờ
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 }, // Kích thước ngẫu nhiên
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      style={{ 
        position: 'fixed', // Cố định sau nền
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1 // Đặt Z-Index = -1 để nó nằm DƯỚI CÙNG
      }}
    />
  );
}

export default ParticlesBackground;