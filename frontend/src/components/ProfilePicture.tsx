import pic from "../assets/ProfileDefault.jpg";

interface ProfilePictureProps {
  img: string;
}

function ProfilePicture({ img }: ProfilePictureProps) {
  const imageExist = img === "" ? pic : img;

  return (
    <>
      <div className="inline-block ratio ratio-1x1 rounded-circle overflow-hidden">
        <img
          src={imageExist}
          alt="Profile Picture"
          max-width="100%"
          height="auto"
          className="object-fit-cover object-fit-center"
        />
      </div>
    </>
  );
}

export default ProfilePicture;
