import MainLayout from '~/layout/mainLayout';

export const meta = () => {
  return [{ title: 'My Blog' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <div>
      <MainLayout />
    </div>
  );
}
