import { useRef, useState } from 'react';
import { uploadFile } from '../util/upload-file';
import { baseUrl } from '../BaseUrl';
import { Box } from '@chakra-ui/react';
const inputStyle = {
    border: "1.5px solid #00ACEE",
    marginBottom: "40px",
    outline: "none",
    padding: "10px",
    width: "100%",
    fontSize: "17.5px",
    borderRadius: "10px",
    // color: "#00ACEE",
  };

const Upload = ({
	label = '',
	onChange
}) => {
	const docRef = useRef(null);
    const [isUploading, setIsUploading] = useState("");
	const onChangeFile = async (e) => {
		if (
			(e.target.files.length > 0)
		) {
			console.log('Uploading file, please wait.');
			let result = await uploadFile(e.target.files[0], `${baseUrl}/file-upload/upload` );
			console.log('uploaded');
            setIsUploading("Wait!! file is uploading");
            console.log(result);
			if (result.success === 1) {
				// successToast(result.Comments);
				onChange &&
					onChange(
						result.fileUrl,
						e.target.files[0].name,
						e.target.files[0].size,
					);
                    setIsUploading("file uploaded successfully");
			} else {
                alert("uploading error")
                setIsUploading("error in uploading file, please try again!!");
            };
		}
	};

	return (
		<Box>
			<label
                htmlFor=""
                style={{
                  alignItems: "left",
                  fontSize: "20px",
                  marginLeft: "2px",
                }}
              >
                {label}*
              </label>
			<input
				id="myInput"
                style={inputStyle}
				type="file"
				ref={docRef}
				onChange={(e) => onChangeFile(e)}
			/>
            <p>{isUploading}</p>
		</Box>
	);
};

export default Upload;
