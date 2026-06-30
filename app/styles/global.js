import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 1,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIconItem: {
    marginLeft: 16,
  },
  storySection: {
    paddingVertical: 12,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  storyList: {
    paddingHorizontal: 12,
  },
  storyContainer: {
    width: 72,
    marginRight: 12,
    alignItems: 'center',
  },
  storyAvatar: {
    width: 62,
    height: 62,
    borderRadius: 31,
    borderWidth: 2,
    borderColor: '#ff8501',
  },
  storyText: {
    marginTop: 6,
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  postCard: {
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  postProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postAvatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    marginRight: 10,
  },
  postProfileText: {
    justifyContent: 'center',
  },
  postUsername: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111',
  },
  postLocation: {
    fontSize: 12,
    color: '#666',
  },
  postOptions: {
    fontSize: 16,
    color: '#111',
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  postActionButton: {
    fontSize: 22,
    marginRight: 18,
  },
  postLikes: {
    marginHorizontal: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  postCaption: {
    marginHorizontal: 16,
    marginBottom: 12,
    color: '#333',
    lineHeight: 20,
  },
  detailImage: {
    width: '100%',
    height: 420,
  },
  detailBody: {
    padding: 16,
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  detailText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#444',
    marginBottom: 10,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 14,
  },
  tagItem: {
    color: '#0f7cff',
    fontSize: 13,
    marginRight: 10,
    marginBottom: 6,
  },
  commentRow: {
    marginBottom: 12,
  },
  commentUser: {
    fontWeight: '700',
    color: '#111',
  },
  profileHeader: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  profileTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileAvatar: {
    width: 92,
    height: 92,
    borderRadius: 46,
    marginRight: 18,
  },
  profileMeta: {
    flex: 1,
  },
  profileNumbers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  profileNumber: {
    alignItems: 'center',
  },
  profileNumberValue: {
    fontSize: 16,
    fontWeight: '700',
  },
  profileNumberLabel: {
    fontSize: 12,
    color: '#666',
  },
  profileName: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  profileBio: {
    fontSize: 14,
    color: '#444',
    marginTop: 8,
    lineHeight: 20,
  },
  actionButton: {
    marginTop: 14,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  actionButtonText: {
    fontWeight: '700',
    color: '#111',
  },
  galleryItem: {
    flex: 1,
    aspectRatio: 1,
    margin: 1,
  },
  galleryImage: {
    width: '100%',
    height: '100%',
  },
});
