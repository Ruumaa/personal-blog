import UserImages from '@/app/components/UserImages/UserImages';
import { getUserImages } from '@/lib/fetch';
const page = async ({ params }) => {
  const userId = params.id;
  const images = await getUserImages(userId);
  if (images?.length === 0) {
    return (
      <div className="flex gap-4 items-center justify-center h-screen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-28 h-w-28"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
        <h1 className="text-5xl font-mono text-primary font-semibold">
          No photos found, Let&apos;s upload some!
        </h1>
      </div>
    );
  }

  return (
    <div>
      <div className="w-full h-full">
        <div className="w-3/4 my-10">
          <h1 className="text-6xl font-semibold">
            Explore Your Memories with Our{' '}
            <span className="text-primary font-bold underline">
              Gallery App
            </span>
          </h1>
          <p className="text-lg mt-5">
            Explore and manage your memories effortlessly with our Gallery App.
            Swipe through, relive, and delete photos seamlessly. Enjoy
            clutter-free organization for your digital gallery, putting your
            memories in your control. Simple, intuitive, and personalized photo
            management at your fingertips.
          </p>
        </div>
        <div className="divider mb-12"></div>
        <UserImages images={images} />
      </div>
    </div>
  );
};

export default page;
