import authSlice from "./auth.slice";
import userSlice from "./user.slice";
import blogSlice from "./blog.slice";
import paymentSlice from "./payment.slice";
import messageSlice from "./message.slice";
import propertySlice from "./property.slice"

const combineSlices = {
    authSlice,
    userSlice,
    blogSlice,
    messageSlice,
    paymentSlice,
    propertySlice
}

export default combineSlices