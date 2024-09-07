import { useUser } from '@clerk/clerk-react';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

type Message = {
  text: string;
  sender: 'user' | 'bot';
};


const socket = io(import.meta.env.VITE_BACKEND_URL, {
  withCredentials: true,
});

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const {user}=useUser();
  const [avatar, setAvatar]=useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  if(!user){
    return null;
  }

  useEffect(() => {
    setAvatar(user.imageUrl);
    // Listen for bot responses from the server
    socket.on('botResponse', (response) => {
      setMessages((prev) => [...prev, { sender: 'bot', text: response }]);
      setLoading(false);
    });

    // Clean up when the component is unmounted
    return () => {
      socket.off('botResponse');
    };
  }, []);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    socket.emit('userMessage', userMessage);

    // Simulate bot response (you can replace this with an API call)...add bot response here

    // setTimeout(() => {
    //   const botMessage: Message = { text: `Bot reply to: ${input}`, sender: 'bot' };
    //   setMessages((prevMessages) => [...prevMessages, botMessage]);
    // }, 1000);

    setInput('');
    setLoading(true);
  };

  const renderMessages = () => {
    return messages.map((message, index) => (
      <div key={index} className="flex items-center">

        {/* {message.sender === 'bot' ? (
          <img
            src="data:image/jpeg;base64,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" // Bot image URL
            alt="Bot Avatar"
            className="w-10 h-10 rounded-full mr-2"
          />
        ) : (
          <img
            src="data:image/png;base64,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" // User image URL
            alt="User Avatar"
            className="w-10 h-10 rounded-full mr-2"
          />
        )} */}

        {
          message.sender === 'user' ? (
            <>

              <div className="chat chat-end  w-full">
                <div className="chat-bubble chat-bubble-success"> {message.text}</div>
              </div>
              <img
                src={avatar}
                alt="User Avatar"
                className="w-10 h-10 rounded-full mr-2"
              />
            </>
          ) : (
            <>
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAREBASEg8QFQ8QEBAPEhESEBAQEBIQFREWFhURExcYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFRAQGS0dHR0tLSsrLS0tNy03LTctLS0rLy0yLS83LS0tLTUrKystKy0tKzgrKystLTMtKy0rLS0tN//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAwECBAUGBwj/xABBEAACAQIDAwgHBQUJAQAAAAAAAQIDEQQFEiExQQYHIlFhcYGREzJSobHB0SNygpLhFTNCYrIUF0NzdIOTs8Il/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAIBAwT/xAAeEQEBAQEBAAMBAQEAAAAAAAAAAQIREgMhMQRBIv/aAAwDAQACEQMRAD8A9xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtnNLe0BcDHli48Lv3EVXFNppbLpq99q7Ubys6krY6nF2vdrgiF5nHq95rVl0fan5r6F37Ph1y/MV5jOth+049XvJKeYU3xt37jV/s+HXL8xa8uj7U/NP5DzDroQa/CVnCCi7y07LvY7cDJjio8bonjepwWxmnuaLjGgAAAAAAAAAAAAAAAAAAAAAAQ4ypphJ+HmBDWxLbtHzLFBb2zEqYmFKDlKSSUXKUm7RjFbbt8EeXco+d+Kk4YOj6TevTVdUIfgp75Ltbj4lyJtetTnG1kQVK0Yq8pJLrk1H4nzhmXLjM8Q3rxlSMX/BStRgu7Qk/Ns0FZuo7zbnLdebc35sqZTdx9PVuUWCh62Mwyt116f1MSfLTLFvzDC/8ANA+bIwtsWxdmwu0m+U+30hHlrlb3ZhhP+aBlUuUuBl6uNwz/AN+n9T5l0lHAeT2+q6OIhNXhOMl1xkpfAk1HydTjoalHoyW6UejJeKN3l3LDMsPb0eNraV/DOSrRfY1UT9xnKr1H0sp2MvDYq7s9/BnimQ870k1HGUE48a1C6a7XSe9dzv2HqOX5hSr04VaU1OnNaozjua+T7GZYqV0oI8PPVGL60SHNQAAAAAAAAAAAAAAAAAAI8RWUIuT4HM1Mxqzq2cuhZ9FJW7O1m9zb934o5ZP7Vdz+BeYyuJ5582lChh8NFtLESnUnbjClotF/imn+E8jij0jnpd6mB/y8V/VRPO4IvLltWMCVUjZZDk9TFVo0qdrvpSk/VhBb5P6cTuq/NklTvDFSdS38dOKpt9WzavNnbOLXk+T+jGLzVeaaC7QZuKwsqc5QnG04ScZLqaIlAcX66x9Ba4GVoKwpXaSV22kkt7b2JIcPTDdIjlA9Ny3m1c6alWryjNq+inCMlHsbe991jkeU/J+pg6ihNqUZJuFRKyklvTXBrq7ULiyOfx/0Y1fMrm2j0fmXzWca1fCtv0c6bxEVwjOEoxlbvUo/lPPJo7Dmidsyl/pK/wD2UTlp68X7e0UMfVjUaU3pT2Re1blsOlwtbXFPjxXachTf2ku/5I6fK/Vfgc9R2jOABDQAAAAAAAAAAAAAAAGHmsfs32NPwOSm/tF4ncSV1Z7mc7nGUxhF1Yydk10Wr73bf4lZrK8f55H9pgf8vE/1UTz+B3vPBF68FK3RUcRG/a3Sdvczz+LOuXHf66zkbn8MHOpKVOUlUhGPRaTTTb48Hf3HXf3l03seGqKPX6SDflb5nlcKhOqp2zux4vk/mxu3Vn63OfZisRiKlZRcVNxsnZvZFRu7cdhr1Ix1M6Hk/wAmamMpynCrTioT0NS1N30p32LtNnbW3z8Wfv6kaZyJ8uxSpVaVS1/R1IT09emSdjcZ1yQq4ajKtKrScYuKstSbcpKKtddpzDnYXs/TOs/Jn/m9j0z+8qnHZHDVGu2cE/mc3yy5UQxsaUY0pR0SlNuTi96tpVjlnVIp1DLu1OP5fjzZZPxHUZ1vNQ//AKL/ANJX/wCyicfJnXc1Kf8Ab5ytsWFqpvqbqUrfBnHT3Y/XsGH9d951WVrotmryvJlKMakpu0lq0pcO838IKKSS2I5Wu0i4AEtAAAAAAAAAAAAAAAACLFUFUhKD3STXd1MlAHlHLLk//aaU6E+hVhLXTk1dRmvjFp28TxnM8rr4aeitSlB8G9sJfdktkj6wzHLKdddJWkt0lskvqjmMx5L1bNaYVab3xaV33xlsOk0i56+bFIvUz1rM+QWDb6WGnRf8jlTj4RfR9xoa/NxD/Dxc12Tpxl74uJfpFw4ZTNtkfKCthJOVKStJJShJaoStuuutbdq6zbz5u663Ymk++E4/Uilzf4vhUofmmv8AybN8c9fFNTlnWHnvKjEYuyqOKhF3UIJxjq9p3bbfiaOVQ6dc3+L41KH55v8A8ksebuu9+IorujOX0F339MfDMzmZxyDmWuR3lHm5j/iYuX4KSj75N/A32V83mF2WoVqz2bZuTi+9RtHzM9LmHlOCwdWvNQpU5Tm+EVe3e9yXaz2Hm85Jyw8dLs8RXcXUa2xpwX8KfFK7d+LZ1uU8kZRio6adGn7EIxv5LYdVgMBToxtBb98ntk+9kXTpnPE9KmoxUVuilFdyVi8A5rAAAAAAAAAAAAAAAAAAAAAAGnzHPoU21Ba5Lje0V48SzL8xr1E5SUIxfq2Tu+3a9xvKzrb1asVv8t5rMZSpSUvsad7Pa4Rb3E0Kd9rK1YJbjZByrpUvYXvRT0FL2ffL6mfjsqldyptbduhu3kzV1KVWO+nP8rfvRbEvoKXs++X1KqlS9he9mPCnVe6nP8kjZYPKpt3qdGPsp3k/oBtcsjCMItUqe699KT39ZtKOJi9m59T+RgxSSSW5bEiyoibDrcA01fHVYR6Ol23qSbduyzK4LPFLZOOn+ZbY+PUTyt63AKJ32rcypjQAAAAAAAAAAAAAAAAAADSZ5j3tpxf32v6TaY2vog5cdy7zlKz39ZWYysaFLXKMfaaR1FGC2JLYlu7Oo53Afvod7/pZ0lB7yqxMQVJ37hWqcCLUZILipZqGo0XlC3UNQFxSe4pqDkBGaqtT0za4b13M2eowMY+n+FfMDYZRjHFqDfRe7sf0N4crSOhy+tqht3x2P5MmxsZIAJaAAAAAAAAAAAAAABRsDT5zVvJR4RW3vZpapn4qept9bbMCqdIlFhZWqQ+98dh0NCqle/eaXKqGutFdSlLyi7e+xnKYoncymoh1DUBNqGoh1DUBNqGoh1DUBNqDkQ6i2c9gF+owsQ+n4Im1jHUtLpv26al43/VAKRssuqWkup7Poa2kZlEDegtpyuk+tFxzUAAAAAAAAAAAAABBjZWhLut57Ccxcy9TxQg0dUwqpm1TCqnRLYcmad6lSXsxUfN/oQY7BRjUnp1Qd79B2W3bu3G15OUdNJy9uTfgtn1LM+o+rNfdfyfxJ79t/wAab7VbpRkv5k4vzRWGIepRlBpu9ndNbBqLKkbtO7TV7buJTGTqGoxbz9qL70/kV1z6o+bAydQ1GNrn1R82UvPrivBsCWriGnpUW21fekrXttuRTnVlxhFdl5v6FLWd3Jt2twSSGoCtLBqcoqTlNtpdJ9Ha+pbDeZ9RShTaWyL0eFtnwMbIaGqbnwgtn3n+htc1paqUutdJeH6E2/bWipGZSMOkZlIpjbYOXR7mTmLgdz8DKIqgAGAAAAAAAAAAABZWp6otdZeAOcxdGUXZp9/B9zI8Nl86r3NR4ya4dnWzpwV6ZxbTpqKUUrJJJLsLa9JTi4vc1b9SQEtcdiaUqcnGW9e9cGiLWdRmuXqtHZZTj6r+T7DlK0JQk4yVpLemdJepsX6xrINYdRGifUUlUMd1C3UBNrLqacmopXbdku0hgm2kk23sSW1tnU5Llfolrn+8a79K6u8m3gzsBhVSgo8d7fXLiydoqCFNHisA4Sbim4ParbbdjFCDb2Jm8BXpnEdCnpVuPHvJACWgAAAAAAAAAAAAAAAAAAAAAY2NwFOsrTjtW6S2SXczJAHK4vk5VjtpyU11Poy+j9xramXV476NTwi5fA7wFeqzjgoZfXe6jU8YNfEz8LyerS9fTBdr1S8l9TrgPRxhZfllOj6qvLjN7ZfojNAJaAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRsqGgIZ4mKIZZhBGRKjF8CN4OHUBHHMYMlhiososHDqJI0IrgBfGVypRIqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q==" // Bot image URL
                alt="Bot Avatar"
                className="w-10 h-10 rounded-full mr-2"
              />
              <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-primary"> {message.text}</div>
                
              </div>



            </>

          )
        }
        {/* <div
          className={`p-2 m-2 rounded-lg text-white ${message.sender === 'user' ? 'bg-blue-500' : 'bg-gray-500'
            }`}
        >
          {message.text}
        </div> */}

      </div>
    ));
  };

  return (
    <div className="h-screen   ml-64 flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl border border-gray-300 rounded-lg shadow-lg bg-white mb-12 " style={{ height: '650px' }}>
        <div className="p-4 overflow-y-auto" style={{ height: '570px' }}>
          {renderMessages()}
          {loading && (
            
          <div className="flex items-center">
           <img
                src="data:image/jpeg;base64,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" // Bot image URL
                alt="Bot Avatar"
                className="w-10 h-10 rounded-full mr-2"
              />
            <div className="flex flex-row gap-2">
              <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
              <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
              <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
            </div>
          </div>
          )}

        </div>
        <div className="p-2 flex">
          <input
            type="text"
            className="text-white flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;



