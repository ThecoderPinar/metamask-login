// pages/index.tsx
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import UserTable from '../components/UserTable';

interface User {
  address: any;
  name: string;
}

const Home: React.FC = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const router = useRouter();

  useEffect(() => {
    // Check if Web3 is available
    if (typeof window !== 'undefined' && typeof (window as any).ethereum !== 'undefined') {
      // Request account access if not already enabled
      (window as any).ethereum.request({ method: 'eth_requestAccounts' });
      setIsLoggedin(true);

      // Kullanıcı bilgilerini users state'ine ekleyin
      const userAddress = (window as any).ethereum.selectedAddress;
      const userName = 'John Doe'; // Kullanıcının ismini burada belirleyebilirsiniz
      setUsers((prevUsers) => [...prevUsers, { address: userAddress, name: userName }]);
    }
  }, []);

  const handleLoginWithMetamask = async () => {
    try {
      if (typeof window !== 'undefined' && typeof (window as any).ethereum !== 'undefined') {
        const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
        const userAddress = accounts[0];
        console.log('Connected Ethereum Account:', userAddress);

        setIsLoggedin(true);

        // Kullanıcı bilgilerini users state'ine ekleyin
        const userName = 'John Doe'; // Kullanıcının ismini burada belirleyebilirsiniz
        setUsers((prevUsers) => [...prevUsers, { address: userAddress, name: userName }]);
        console.log('Authentication successful! User logged in.');
      } else {
        console.error('Metamask is not installed or not available.');
      }
    } catch (error) {
      console.error('Error connecting with Metamask:', (error as Error).message);
    }
  };

  const handleLogout = () => {
    // Kullanıcıyı çıkış yaparken metamask'ı devre dışı bırakın (disconnect etmeyi desteklemeyebilir)
    if (typeof window !== 'undefined' && typeof (window as any).ethereum !== 'undefined') {
      try {
        (window as any).ethereum.disconnect();
      } catch (error) {
        console.error('Error disconnecting from Metamask:', error);
      }
    }
    // users state'ini sıfırlayarak kullanıcı bilgilerini temizleyin
    setUsers([]);
    setIsLoggedin(false);
    router.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLogout={handleLogout} isLoggedin={isLoggedin} />
      <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        {isLoggedin ? (
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome, Metamask User!</h2>
            <div className="mt-4">
              <UserTable users={users} />
            </div>
          </div>
        ) : (
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Metamask Login</h2>
            <div>
              <p className="mt-2 text-center text-sm text-gray-600">
                Welcome! Please make sure you have Metamask installed and your Ethereum wallet is connected.
              </p>
            </div>
            <div>
              <button
                onClick={handleLoginWithMetamask}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login with Metamask
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
